import { toPascal } from '@utils'
import { MouseEventHandler } from 'react'
import { WeatherMoon24Regular, WeatherSunny24Regular, Settings24Regular } from '@fluentui/react-icons'

function Header(props: {
  toggleTheme: MouseEventHandler<HTMLButtonElement> | undefined
  isDarkMode: boolean
  curProduct: string
}) {
  const toSetting = () => {}
  return (
    <>
      <div>
        <div className="header flex items-center justify-between px-3 py-20 text-lg">
          <div className="text-4xl font-semibold">iChat</div>
          <div className="text-xl font-semibold">
            {props.curProduct === 'chatgpt' ? 'ChatGPT' : toPascal(props.curProduct)}
          </div>
          <div>
            <span onClick={toSetting} className="mr-2 cursor-pointer">
              <Settings24Regular />
            </span>
            <span onClick={props.toggleTheme} className="cursor-pointer">
              {props.isDarkMode ? <WeatherSunny24Regular /> : <WeatherMoon24Regular />}
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
