import { Product } from '@types'

export const CHATGPT_API_MODELS = ['gpt-3.5-turbo', 'gpt-4', 'gpt-4-32k']

export const productList: Product[] = [
  {
    icon: 'chatgpt',
    name: 'chatgpt',
    selected: true,
  },
  {
    icon: 'bing',
    name: 'bing',
    selected: false,
  },
  {
    icon: 'bard',
    name: 'bard',
    selected: false,
  },
]
