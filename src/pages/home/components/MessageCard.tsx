import cx from 'classnames'
import { FC, memo, useEffect, useMemo, useState } from 'react'
import { Image } from '@fluentui/react-components'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { IoCheckmarkSharp, IoCopyOutline } from 'react-icons/io5'
import { BeatLoader } from 'react-spinners'
import { ChatMessageModel } from '@types'
import Markdown from './Markdown'
import ErrorAction from './ErrorAction'
import MessageBubble from './MessageBubble'

interface Props {
  message: ChatMessageModel
  className?: string
  botId: string
}

const ChatMessageCard: FC<Props> = ({ botId, message, className }) => {
  const [copied, setCopied] = useState(false)
  const botIcon = `${botId}-logo`

  const copyText = useMemo(() => {
    if (message.text) {
      return message.text
    }
    if (message.error) {
      return message.error.message
    }
  }, [message.error, message.text])

  useEffect(() => {
    if (copied) {
      setTimeout(() => setCopied(false), 1000)
    }
  }, [copied])

  return (
    <div
      className={cx('group flex w-full gap-3', message.author === 'user' ? 'flex-row-reverse' : 'flex-row', className)}
    >
      <div className="flex items-center">
        <Image
          className="w-8"
          src={`/src/assets/svg/${message.author === 'user' ? 'avatar' : botIcon}.svg`}
          alt={botId}
        />
      </div>
      <div className="flex w-11/12 max-w-fit  flex-col items-start gap-2">
        <MessageBubble color={message.author === 'user' ? 'primary' : 'flat'}>
          {message.text ? (
            <Markdown>{message.text}</Markdown>
          ) : (
            !message.error && <BeatLoader size={10} className="leading-tight" />
          )}
          {!!message.error && <p className="text-[#e00]">{message.error.message}</p>}
        </MessageBubble>
        {!!message.error && <ErrorAction error={message.error} />}
      </div>
      {!!copyText && (
        <CopyToClipboard text={copyText} onCopy={() => setCopied(true)}>
          {copied ? (
            <IoCheckmarkSharp
              className="self-top invisible mt-[12px] cursor-pointer group-hover:visible"
              color="#707070"
            />
          ) : (
            <IoCopyOutline className="self-top invisible mt-[12px] cursor-pointer group-hover:visible" />
          )}
        </CopyToClipboard>
      )}
    </div>
  )
}

export default memo(ChatMessageCard)
