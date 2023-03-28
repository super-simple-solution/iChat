import { zip } from 'lodash-es'
import { BotId } from '@bots'
import { ChatMessageModel } from '@types'
import { getLocalStorage, setLocalStorage } from '@utils/storage'

/**
 * conversations:$botId => Conversation[]
 * conversation:$botId:$cid:messages => ChatMessageModel[]
 */

interface Conversation {
  id: string
  createdAt: number
}

type ConversationWithMessages = Conversation & { messages: ChatMessageModel[] }

function loadHistoryConversations(botId: BotId): Conversation[] {
  const key = `conversations:${botId}`
  return getLocalStorage(key) || []
}

function loadConversationMessages(botId: BotId, cid: string): ChatMessageModel[] {
  const key = `conversation:${botId}:${cid}:messages`
  return getLocalStorage(key) || []
}

export function setConversationMessages(botId: BotId, cid: string, messages: ChatMessageModel[]) {
  const conversations = loadHistoryConversations(botId)
  if (!conversations.some((c) => c.id === cid)) {
    conversations.unshift({ id: cid, createdAt: Date.now() })
    setLocalStorage(`conversations:${botId}`, conversations)
  }
  const key = `conversation:${botId}:${cid}:messages`
  setLocalStorage(key, messages)
}

export function loadHistoryMessages(botId: BotId): ConversationWithMessages[] {
  const conversations = loadHistoryConversations(botId)
  const messagesList = conversations.map((c) => loadConversationMessages(botId, c.id))
  return zip(conversations, messagesList).map(([c, messages]) => ({
    id: c!.id,
    createdAt: c!.createdAt,
    messages: messages!,
  }))
}
