import { zip } from 'lodash-es'
import { BotId } from '@bots'
import { ChatMessageModel } from '@types'

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
  const value = localStorage.getItem(key)
  return value && value[0] === '[' ? JSON.parse(value) : []
}

function loadConversationMessages(botId: BotId, cid: string): ChatMessageModel[] {
  const key = `conversation:${botId}:${cid}:messages`
  const value = localStorage.getItem(key)
  return value && value[0] === '[' ? JSON.parse(value) : []
}

export async function setConversationMessages(botId: BotId, cid: string, messages: ChatMessageModel[]) {
  const conversations = await loadHistoryConversations(botId)
  if (!conversations.some((c) => c.id === cid)) {
    conversations.unshift({ id: cid, createdAt: Date.now() })
    localStorage.setItem(`conversations:${botId}`, JSON.stringify(conversations))
  }
  const key = `conversation:${botId}:${cid}:messages`
  localStorage.setItem(key, JSON.stringify(messages))
}

export async function loadHistoryMessages(botId: BotId): Promise<ConversationWithMessages[]> {
  const conversations = await loadHistoryConversations(botId)
  const messagesList = await Promise.all(conversations.map((c) => loadConversationMessages(botId, c.id)))
  return zip(conversations, messagesList).map(([c, messages]) => ({
    id: c!.id,
    createdAt: c!.createdAt,
    messages: messages!,
  }))
}
