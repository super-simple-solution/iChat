import { defaults } from 'lodash-es'
import { BotId } from '@bots'
import { getLocalStorage, setLocalStorage } from '@utils/storage'
import { defaultConfig } from '@const'

export function getBotConfig(botId: BotId) {
  const result = getLocalStorage(`${botId}_config`)
  return defaults(result, defaultConfig[botId])
}

export function updateBotConfig(botId: BotId, updates: object) {
  setLocalStorage(`${botId}_config`, updates)
}
