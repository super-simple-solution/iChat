// import { getUserConfig } from '@/services/user_config'
import { ChatError, ErrorCode } from '@/utils/errors'
import { AbstractBot, MessageParams } from '../abstract_bot'
import { CHATGPT_SYSTEM_MESSAGE, ConversationMessage } from '@/const/chatgpt'

export const CHATGPT_API_MODELS = ['gpt-3.5-turbo', 'gpt-4', 'gpt-4-32k']
// send request
// parse request
// set local response

async function getUserConfig() {
  return {
    openaiApiKey: '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',
    openaiApiHost: 'https://api.openai.com',
    chatgptApiModel: CHATGPT_API_MODELS[0],
  }
}

interface conversitionContext {
  messages: ConversationMessage[]
}

export class ChatGPTApiBot extends AbstractBot {
  private conversitionContext?: conversitionContext

  async sendMessage(params: MessageParams) {
    const { openaiApiKey, openaiApiHost, chatgptApiModel } = await getUserConfig()
    if (!openaiApiKey) {
      throw new ChatError('OpenAI API key not set', ErrorCode.API_KEY_NOT_SET)
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
import { isEmpty } from '@/utils'
import { streamAsyncIterable } from '@/utils/stream'

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
