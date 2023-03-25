import { Input } from '@fluentui/react-components'

import { Search24Filled, Send24Regular } from '@fluentui/react-icons'
function Home() {
  return (
    <>
      <div className="h-full py-24">
        <div className="flex h-full flex-col  justify-between">
          <div className="h-full w-full rounded-3xl bg-neutral-400  p-24">
            <div className="mb-24 border-b-[1px] border-neutral-600 pb-24 text-center text-lg font-semibold">
              ChatGPT
            </div>
          </div>
          <div className="mt-24 flex items-center justify-between">
            <Search24Filled className="cursor-pointer" />
            <Input className="flex-auto" appearance="underline" placeholder="Ask me anything..." />
            <Send24Regular className="cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
