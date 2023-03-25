import { Input, InputOnChangeData, Message } from '@fluentui/react-components'

import { Search24Filled, Send24Regular } from '@fluentui/react-icons'
import { useState } from 'react'

interface MessageItem {
  content: string
  from: string
}

function Home() {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<MessageItem[]>([])
  const handleChange = (data: InputOnChangeData) => {
    setMessage(data.value)
  }
  const handleSendMessage = () => {
    setMessages([
      ...messages,
      {
        content: message,
        from: 'me',
      },
    ])
  }
  return (
    <>
      <div className="h-full py-24">
        <div className="flex h-full flex-col  justify-between">
          <div className="h-full w-full rounded-3xl bg-neutral-400  p-24">
            <div className="mb-24 border-b-[1px] border-neutral-600 pb-24 text-center text-lg font-semibold">
              ChatGPT
            </div>
            {messages.map((item, index) => (
              <div key={index}>{item.content}</div>
            ))}
          </div>
          <div className="mt-24 flex items-center justify-between">
            <Search24Filled className="cursor-pointer" />
            <Input
              value={message}
              className="flex-auto"
              onChange={(event, value) => handleChange(value)}
              appearance="underline"
              placeholder="Ask me anything..."
            />
            <Send24Regular className="cursor-pointer" onClick={handleSendMessage} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
