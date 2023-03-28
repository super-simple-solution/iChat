import { Avatar } from '@fluentui/react-components'
import { MouseEventHandler } from 'react'
import { WeatherMoon24Regular, WeatherSunny24Regular, Settings24Regular } from '@fluentui/react-icons'
import { Link } from 'react-router-dom'

export default function Header(props: {
  toggleTheme: MouseEventHandler<HTMLButtonElement> | undefined
  isDarkMode: boolean
}) {
  return (
    <>
      <div>
        <div className="header flex h-full flex-col items-center justify-between p-5 text-lg">
          <Avatar
            aria-label="Guest"
            image={{
              src: 'https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/KatriAthokas.jpg',
            }}
            {...props}
          />
          <Link to="config" className="mr-2 cursor-pointer">
            <Settings24Regular />
          </Link>

          {/* <div>
            <span onClick={props.toggleTheme} className="cursor-pointer">
              {props.isDarkMode ? <WeatherSunny24Regular /> : <WeatherMoon24Regular />}
            </span>
          </div> */}
        </div>
      </div>
    </>
  )
}
