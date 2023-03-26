import { FC } from 'react'
import cx from 'classnames'
import ScrollToBottom from 'react-scroll-to-bottom'
import { BotId } from '@bots'
import { ChatMessageModel } from '@types'
import MessageCard from './MessageCard'

interface Props {
  botId: BotId
  messages: ChatMessageModel[]
  className?: string
}

const MessageList: FC<Props> = (props) => {
  return (
    <ScrollToBottom className="h-full overflow-auto">
      <div className={cx('flex h-full flex-col gap-3', props.className)}>
        {props.messages.map((message, index) => {
          return <MessageCard key={message.id} message={message} className={index === 0 ? 'mt-5' : undefined} />
        })}
      </div>
    </ScrollToBottom>
  )
}

export default MessageList
