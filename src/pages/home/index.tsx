import { Input, InputOnChangeData } from '@fluentui/react-components'

import { Search24Filled, Send24Regular } from '@fluentui/react-icons'
import { useState } from 'react'

interface MessageItem {
  content: string
  from: string
}

function Home() {
  const [message, setMessage] = useState('')
  const handleChange = (data: InputOnChangeData) => setMessage(data.value)

  const [messageList, setMessageList] = useState<MessageItem[]>([])
  const handleSendMessage = () => {
    setMessageList([
      ...messageList,
      {
        content: message,
        from: 'me',
      },
      // 假数据
      {
        content: '333',
        from: 'other',
      },
    ])
  }
  return (
    <>
      <div className="h-full py-24">
        <div className="flex h-full flex-col justify-between">
          <div className="message-content h-full w-full rounded-3xl  p-24">
            <div className="mb-24 border-b-[1px] border-neutral-600 pb-24 text-center text-lg font-semibold">
              ChatGPT
            </div>
            <div>
              {messageList.map((item, index) => (
                <div key={index} className={`mb-3  flex ${item.from === 'me' ? 'justify-end' : ''}`}>
                  <div className="type-item select  inline-block rounded-lg py-1 px-2">{item.content}</div>
                </div>
              ))}
            </div>
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
