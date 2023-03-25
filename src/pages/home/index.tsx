import { Input, InputOnChangeData } from '@fluentui/react-components'

import { Search24Filled, Send24Regular } from '@fluentui/react-icons'
import { useState } from 'react'
import { BotId } from '@bots'

interface MessageItem {
  content: string
  from: string
}

interface Props {
  botId: BotId
}

function Home() {
  const chat = useChat(botId)
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
      <div className="flex h-full flex-col justify-between border-l-[1px] border-neutral-400">
        <div className="message-content h-full w-full overflow-hidden ">
          <div className="h-[calc(100vh_-_69px)] overflow-hidden overflow-y-scroll  p-20 pb-28">
            {messageList.map((item, index) => (
              <div key={index} className={`mb-3  flex ${item.from === 'me' ? 'justify-end' : ''}`}>
                <div
                  className={`inline-block rounded-lg py-1 px-2 ${
                    item.from === 'me' ? 'bg-purple-200' : 'type-item select'
                  }`}
                >
                  {item.content}
                </div>
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
    </>
  )
}

export default Home
