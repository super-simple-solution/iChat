import { useCallback, KeyboardEventHandler, FC, SetStateAction, useRef, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Button, ButtonProps, Textarea } from '@fluentui/react-components'

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
  const maxWords = 2000
  const [value, setValue] = useState('')
  const [searchParams] = useSearchParams()
  const [wordsLen, setWordsLen] = useState(0)
  const textareaRef = useRef<HTMLTextAreaElement>()
  const botId = searchParams.get('bot_id') || 'chatgpt'
  const chat = useChat(botId as BotId)
  const onSubmit = useCallback(async () => {
    chat.toSendMessage(value as string)
    setValue('')
  }, [value])

  useEffect(() => {
    textareaRef.current && textareaRef.current.focus()
  }, [])

  const onChange = (value: string) => {
    const inputValue = value
    const inputWords = inputValue.split('')
    setWordsLen(inputWords.length)
    if (wordsLen <= maxWords) {
      setValue(inputValue)
    } else {
      setValue(value)
    }
  }

  const onKeyDown: KeyboardEventHandler<HTMLTextAreaElement> = useCallback(
    (e) => {
      if (e.key === 'Enter') {
        e.preventDefault()
        if (e.shiftKey) {
          setValue(value + '\n')
        } else {
          onSubmit()
        }
      }
    },
    [value],
  )

  return (
    <>
      <div className="flex h-full flex-col justify-between">
        <div className="message-content h-full w-full overflow-hidden ">
          <div className="h-[calc(100vh_-_52px)] overflow-hidden overflow-y-scroll p-3 pb-16">
            <MessageList botId={chat.botId} messages={chat.messages} />
          </div>
        </div>
        <div className="my-1 flex items-center justify-between p-2 pb-1">
          <div className="relative flex-auto">
            <Textarea
              ref={textareaRef}
              value={value}
              onKeyDown={onKeyDown}
              appearance="filled-lighter"
              className="shadow-deep w-full flex-auto"
              autoComplete="off"
              placeholder="Ask me anything..."
              onChange={(event) => onChange(event.target.value)}
            />
            <span className="absolute right-1 bottom-2 text-neutral-400">
              {wordsLen}/{maxWords}
            </span>
          </div>
          <span className="ml-2">
            <MicButton className="cursor-pointer" aria-label="Enter by voice" onClick={() => stt()} />
            <Send24Regular className="ml-2 cursor-pointer" onClick={() => onSubmit()} />
          </span>
        </div>
        <div className="pl-3 pb-2 text-neutral-400">[Enter] send, [Shift+Enter] line break</div>
      </div>
    </>
  )
}

export default Home
