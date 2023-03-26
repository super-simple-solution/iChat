import { Link } from 'react-router-dom'
import { FC, useContext, useState } from 'react'
import { ConversationContext } from '@context'
import { ChatError, ErrorCode } from '@utils/errors'
import Button from './Button'
import MessageBubble from './MessageBubble'

const ChatGPTAuthErrorAction = () => {
  const [fixed] = useState(false)

  if (fixed) {
    return <MessageBubble color="flat">Fixed, please retry chat</MessageBubble>
  }
  return (
    <div className="flex flex-row items-center gap-2">
      <Link to="/setting">
        <Button color="primary" text="Set api key" size="small" />
      </Link>
    </div>
  )
}

const ErrorAction: FC<{ error: ChatError }> = ({ error }) => {
  const conversation = useContext(ConversationContext)

  if (error.code === ErrorCode.BING_UNAUTHORIZED) {
    return (
      <a href="https://bing.com" target="_blank" rel="noreferrer">
        <Button color="primary" text="Login at bing.com" size="small" />
      </a>
    )
  }
  if (error.code === ErrorCode.BING_FORBIDDEN) {
    return (
      <a href="https://bing.com/new" target="_blank" rel="noreferrer">
        <Button color="primary" text="Join new Bing waitlist" size="small" />
      </a>
    )
  }
  if (error.code === ErrorCode.CHATGPT_CLOUDFLARE || error.code === ErrorCode.CHATGPT_UNAUTHORIZED) {
    return <ChatGPTAuthErrorAction />
  }
  if (error.code === ErrorCode.CONVERSATION_LIMIT) {
    return <Button color="primary" text="Restart" size="small" onClick={() => conversation?.reset()} />
  }
  if (error.code === ErrorCode.BARD_EMPTY_RESPONSE) {
    return (
      <a href="https://bard.google.com" target="_blank" rel="noreferrer">
        <Button color="primary" text="Visit bard.google.com" size="small" />
      </a>
    )
  }
  return null
}

export default ErrorAction
