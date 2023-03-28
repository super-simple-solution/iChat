import { Product } from '@types'
import { BotId } from '@bots'
export const CHATGPT_API_MODELS = ['gpt-3.5-turbo', 'gpt-4', 'gpt-4-32k']
export enum BingConversationStyle {
  Creative = 'creative',
  Balanced = 'balanced',
  Precise = 'precise',
}

export const defaultConfig: Record<BotId, Object> = {
  chatgpt: {
    openaiApiKey: '',
    openaiApiHost: 'https://api.openai.com',
    chatgptApiModel: CHATGPT_API_MODELS[0],
  },
  bing: {
    bingConversationStyle: BingConversationStyle.Balanced,
  },
  bard: {},
}

export const productList: Product[] = [
  {
    icon: 'chatgpt',
    name: 'chatgpt',
    selected: true,
  },
  // {
  //   icon: 'bing',
  //   name: 'bing',
  //   selected: false,
  // },
  // {
  //   icon: 'bard',
  //   name: 'bard',
  //   selected: false,
  // },
]
