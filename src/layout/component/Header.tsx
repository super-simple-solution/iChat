import { Button, Image } from '@fluentui/react-components'
import { toPascal } from '@/utils'
import { MouseEventHandler } from 'react'

function Header(props: { toggleTheme: MouseEventHandler<HTMLButtonElement> | undefined; isDarkMode: boolean }) {
  return (
    <>
      <div>
        <div className="header flex-x-between items-center px-24 py-20 text-lg">
          <div className="flex items-center">
            <Image className="mr-2 h-20" src={'/src/assets/svg/chatgpt-logo.svg'} alt="chatgpt" />
            {toPascal('ChatGPT')}
          </div>
          <div className="flex items-center">
            <Image className="mr-2 h-20" src={'/src/assets/svg/bing-logo.svg'} alt="bing" />
            {toPascal('bing')}
          </div>
          <div className="flex items-center">
            <Image className="mr-2 h-20 " src={'/src/assets/svg/bard-logo.svg'} alt="bard" />
            {toPascal('bard')}
          </div>
          <Button className="bg-gradient" onClick={props.toggleTheme}>
            Toggle {props.isDarkMode ? 'light' : 'dark'}
          </Button>
        </div>
      </div>
    </>
  )
}

export default Header
