import { CHATGPT_API_MODELS } from '@const'

export const USER_CONFIG_KEY = 'use-config'
import { BingConversationStyle } from '@const'

export const DEFAULT_CONFIG = {
  chatgpt: {
    key: '',
    host: 'https://api.openai.com',
    model: CHATGPT_API_MODELS[0],
  },
  bing: {
    style: BingConversationStyle.Balanced,
  },
}
