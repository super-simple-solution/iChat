import { MouseEventHandler, useState } from 'react'
import { WeatherMoon24Regular, WeatherSunny24Regular, Settings24Regular } from '@fluentui/react-icons'
import { Avatar, Dialog, DialogSurface, DialogContent } from '@fluentui/react-components'
import { Button, Menu, MenuTrigger, MenuList, MenuItem, MenuPopover } from '@fluentui/react-components'
import Setting from '@pages/config'

export default function Header(props: {
  toggleTheme: MouseEventHandler<HTMLButtonElement> | undefined
  isDarkMode: boolean
}) {
  const [showDialog, setShowDialog] = useState(false)

  const handleHideDialog = () => setShowDialog(false)
  const openDialog = () => setShowDialog(true)
  const toCancel = () => handleHideDialog()

  return (
    <>
      <div>
        <div className="header flex h-full flex-col items-center justify-between p-5 text-lg">
          <Avatar
            aria-label="Guest"
            image={{
              src: '/svg/avatar.svg',
            }}
            {...props}
          />
          <div>
            <span onClick={props.toggleTheme} className="cursor-pointer">
              {props.isDarkMode ? <WeatherSunny24Regular /> : <WeatherMoon24Regular />}
            </span>
            <div className="mt-2 cursor-pointer" onClick={openDialog}>
              <Settings24Regular />
            </div>
          </div>

          <Dialog open={showDialog} onOpenChange={handleHideDialog}>
            <DialogSurface>
              <DialogContent style={{ minHeight: '300px' }}>
                <Setting toCancel={toCancel} />
              </DialogContent>
            </DialogSurface>
          </Dialog>
        </div>
      </div>
    </>
  )
}
