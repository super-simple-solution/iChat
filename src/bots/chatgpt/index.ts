import { getBotConfig } from '@pages/config/util'
import { DEFAULT_CONFIG } from '@pages/config/const'
import { ChatError, ErrorCode } from '@utils/errors'
import { AbstractBot, MessageParams } from '../abstract_bot'
import { CHATGPT_SYSTEM_MESSAGE, ConversationMessage } from '@const/chatgpt'

interface conversitionContext {
  messages: ConversationMessage[]
}

export class ChatGPTApiBot extends AbstractBot {
  private botId: BotId = 'chatgpt'
  private conversitionContext?: conversitionContext

  async sendMessage(params: MessageParams) {
    const { key: openaiApiKey, host: openaiApiHost, model: chatgptApiModel } = getBotConfig(this.botId)
    if (!openaiApiKey && openaiApiHost === DEFAULT_CONFIG.chatgpt.host) {
      throw new ChatError('Please set your OpenAI API key or set your API host', ErrorCode.API_KEY_NOT_SET)
    }
    if (!this.conversitionContext) {
      this.conversitionContext = {
        messages: [{ role: 'system', content: CHATGPT_SYSTEM_MESSAGE }],
      }
    }
    this.conversitionContext.messages.push({ role: 'user', content: params.prompt })

    const resp = await fetch(`${openaiApiHost}/v1/chat/completions`, {
      method: 'POST',
      signal: params.signal,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${openaiApiKey}`,
      },
      body: JSON.stringify({
        model: chatgptApiModel,
        messages: this.conversitionContext.messages,
        temperature: 0.6,
        stream: true,
      }),
    })

    const result: ConversationMessage = { role: 'assistant', content: '' }

    await parseStream(resp, (message) => {
      console.debug('chatgpt sse message', message)
      if (message === '[DONE]') {
        params.onEvent({ type: 'DONE' })
        const messages = this.conversitionContext!.messages
        messages.push(result)
        // TODO: update and save token useage
        // updateTokenUsage(messages).catch(console.error)
        return
      }
      let data
      try {
        data = JSON.parse(message)
      } catch (err) {
        console.error(err)
        return
      }
      if (data?.choices?.length) {
        const delta = data.choices[0].delta
        if (delta?.content) {
          result.content += delta.content
          params.onEvent({
            type: 'UPDATE_ANSWER',
            data: { text: result.content },
          })
        }
      }
    })
  }

  resetConversation() {
    this.conversitionContext = undefined
  }
}

import { createParser } from 'eventsource-parser'
import { isEmpty } from '@utils'
import { streamAsyncIterable } from '@utils/stream'
import { BotId } from '@bots'

export async function parseStream(resp: Response, onMessage: (message: string) => void) {
  if (!resp.ok) {
    const error = await resp.json().catch(() => ({}))
    throw new Error(!isEmpty(error) ? JSON.stringify(error) : `${resp.status} ${resp.statusText}`)
  }
  const parser = createParser((event) => {
    if (event.type === 'event') {
      onMessage(event.data)
    }
  })
  for await (const chunk of streamAsyncIterable(resp.body!)) {
    const str = new TextDecoder().decode(chunk)
    parser.feed(str)
  }
}
