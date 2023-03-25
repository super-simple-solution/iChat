import { ChatGPTApiBot } from './chatgpt'

export type BotId = 'chatgpt'

const botMap: Record<BotId, typeof ChatGPTApiBot> = {
  chatgpt: ChatGPTApiBot,
}

export function createBotInstance(botId: BotId) {
  return new botMap[botId]()
}
