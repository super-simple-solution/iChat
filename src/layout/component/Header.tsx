import { Button, Image } from '@fluentui/react-components'
import { toPascal } from '@/utils'
import { MouseEventHandler } from 'react'

import {
  WeatherMoon24Filled,
  WeatherMoon24Regular,
  WeatherSunny24Filled,
  WeatherSunny24Regular,
} from '@fluentui/react-icons'

function Header(props: {
  toggleTheme: MouseEventHandler<HTMLButtonElement> | undefined
  isDarkMode: boolean
  curProduct: string
}) {
  return (
    <>
      <div>
        <div className="header flex items-center justify-between px-24 py-20 text-lg">
          {/* <div className={'flex cursor-pointer items-center border-b-[4px] border-red pb-14'}>
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
          </div> */}
          {/* <Button className="bg-gradient" onClick={props.toggleTheme}> */}
          {/* WeatherMoon24Filled */}
          {/* WeatherMoon24Regular */}
          {/* WeatherSunny24Filled */}
          {/* WeatherSunny24Regular */}
          {/* Toggle {props.isDarkMode ? 'light' : 'dark'}
          </Button> */}
          <div>SSS</div>
          <div>{props.curProduct}</div>
          {props.isDarkMode ? (
            <span onClick={props.toggleTheme} className="cursor-pointer">
              <WeatherSunny24Regular />
            </span>
          ) : (
            <span onClick={props.toggleTheme} className="cursor-pointer">
              <WeatherMoon24Filled></WeatherMoon24Filled>
            </span>
          )}
        </div>
      </div>
    </>
  )
}

export default Header
