import { defaults } from 'lodash-es'
import { CHATGPT_API_MODELS } from '@const'
import { getLocalStorage, setLocalStorage } from '@utils/storage'
const CONFIG_KEY = 'user_config'

export enum StartupPage {
  ChatGPT = 'chatgpt',
  Bing = 'bing',
}

export enum BingConversationStyle {
  Creative = 'creative',
  Balanced = 'balanced',
  Precise = 'precise',
}

const userConfigWithDefaultValue = {
  openaiApiKey: '',
  openaiApiHost: 'https://api.openai.com',
  chatgptApiModel: CHATGPT_API_MODELS[0],
  startupPage: StartupPage.ChatGPT,
  bingConversationStyle: BingConversationStyle.Balanced,
}

export type UserConfig = typeof userConfigWithDefaultValue

export function getUserConfig(): UserConfig {
  const result = getLocalStorage(CONFIG_KEY)
  return defaults(result, userConfigWithDefaultValue)
}

export function updateUserConfig(updates: Partial<UserConfig>) {
  setLocalStorage(CONFIG_KEY, updates)
}
