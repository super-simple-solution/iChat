import { defaults } from 'lodash-es'
import { BotId } from '@bots'
import { getLocalStorage } from '@utils/storage'
import { defaultConfig } from '@const'
import { USER_CONFIG_KEY } from './const'

export function getBotConfig(botId: BotId) {
  const result = getLocalStorage(USER_CONFIG_KEY)
  if (result[botId]) {
    return defaults(result[botId], defaultConfig[botId])
  }
}
