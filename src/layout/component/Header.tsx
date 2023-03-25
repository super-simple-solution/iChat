import { toPascal } from '@utils'
import { MouseEventHandler } from 'react'
import { WeatherMoon24Filled, WeatherSunny24Regular } from '@fluentui/react-icons'

function Header(props: {
  toggleTheme: MouseEventHandler<HTMLButtonElement> | undefined
  isDarkMode: boolean
  curProduct: string
}) {
  return (
    <>
      <div>
        <div className="header flex items-center justify-between px-24 py-20 text-lg">
          <div>SSS</div>
          <div>{props.curProduct === 'chatgpt' ? 'ChatGPT' : toPascal(props.curProduct)}</div>
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
