import { ChatGPTApiBot } from './chatgpt'

export type BotId = 'chatgpt' | 'bing' | 'bard'

const botMap: Record<BotId, typeof ChatGPTApiBot> = {
  chatgpt: ChatGPTApiBot,
  bing: ChatGPTApiBot,
  bard: ChatGPTApiBot,
}

export function createBotInstance(botId: BotId) {
  return new botMap[botId]()
}
