import { atomWithImmer } from 'jotai-immer'
import { atomFamily } from 'jotai/utils'
import { createBotInstance, BotId } from '@bots'
import { ChatMessageModel } from '@types'
import { uuid } from '@utils'

type Param = { botId: BotId }

export const chatFamily = atomFamily(
  (param: Param) => {
    const botId = param.botId || 'chatgpt'
    return atomWithImmer({
      botId,
      bot: createBotInstance(botId),
      messages: [] as ChatMessageModel[],
      generatingMessageId: '',
      abortController: undefined as AbortController | undefined,
      conversationId: uuid(),
    })
  },
  (a, b) => a.botId === b.botId,
)
