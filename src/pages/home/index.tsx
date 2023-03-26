import { useCallback, KeyboardEventHandler } from 'react'
import { Input } from '@fluentui/react-components'
import { useSearchParams } from 'react-router-dom'

import { Search24Filled, Send24Regular } from '@fluentui/react-icons'
import { useState } from 'react'
import { BotId } from '@bots'
import { useChat } from '@hooks/use_chat'
import MessageList from './components/MessageList'

function Home() {
  const [value, setValue] = useState('')
  const [searchParams] = useSearchParams()
  const botId = searchParams.get('bot_id')
  const chat = useChat(botId as BotId)
  const onSubmit = useCallback(async () => {
    chat.sendMessage(value as string)
  }, [value])

  const onKeyDown: KeyboardEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      if (e.key === 'Enter') {
        e.preventDefault()
        onSubmit()
      }
    },
    [value],
  )

  return (
    <>
      <div className="flex h-full flex-col justify-between border-l-[1px] border-neutral-400">
        <div className="message-content h-full w-full overflow-hidden ">
          <div className="h-[calc(100vh_-_80px)] overflow-hidden overflow-y-scroll  p-3 pb-12">
            <MessageList botId={chat.botId} messages={chat.messages} />
          </div>
        </div>
        <div className="my-1 flex items-center justify-between p-2">
          <Input
            contentBefore={<Search24Filled className="cursor-pointer" />}
            value={value}
            onKeyDown={onKeyDown}
            className="flex-auto"
            autoComplete="off"
            onChange={(event) => setValue(event.target.value)}
            appearance="underline"
            placeholder="Ask me anything..."
          />
          <Send24Regular className="cursor-pointer" onClick={() => onSubmit()} />
        </div>
      </div>
    </>
  )
}

export default Home
