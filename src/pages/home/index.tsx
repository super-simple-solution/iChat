import { useCallback, KeyboardEventHandler, FC } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Button, ButtonProps, Input } from '@fluentui/react-components'

import { Search24Filled, Send24Regular, Mic24Regular } from '@fluentui/react-icons'
import { useState } from 'react'
import { BotId } from '@bots'
import { useChat } from '@hooks/use_chat'
import MessageList from './components/MessageList'

import { invoke } from '@tauri-apps/api/tauri'

const MicButton: FC<ButtonProps> = (props) => {
  return <Button {...props} appearance="transparent" icon={<Mic24Regular />} size="small" />
}

function stt() {
  invoke('command_stt').then((res) => {
    console.log(res, 'stt res')
  })
}

function Home() {
  const [value, setValue] = useState('')
  const [searchParams] = useSearchParams()
  const botId = searchParams.get('bot_id') || 'chatgpt'
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
      <div className="flex h-full flex-col justify-between">
        <div className="message-content h-full w-full overflow-hidden ">
          <div className="h-[calc(100vh_-_40px)] overflow-hidden overflow-y-scroll p-3 pb-16">
            <MessageList botId={chat.botId} messages={chat.messages} />
          </div>
        </div>
        <div className="my-1 flex items-center justify-between p-2">
          <Input
            size="large"
            contentBefore={<Search24Filled className="cursor-pointer" />}
            contentAfter={
              <span>
                <MicButton className="cursor-pointer" aria-label="Enter by voice" onClick={() => stt()} />
                <Send24Regular className="cursor-pointer" onClick={() => onSubmit()} />
              </span>
            }
            value={value}
            onKeyDown={onKeyDown}
            appearance="filled-lighter"
            className="shadow-deep flex-auto"
            autoComplete="off"
            onChange={(event) => setValue(event.target.value)}
            placeholder="Ask me anything..."
          />
        </div>
      </div>
    </>
  )
}

export default Home
