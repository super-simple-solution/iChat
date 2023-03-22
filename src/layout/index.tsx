import { useColorMode } from '@chakra-ui/color-mode'
import { Outlet } from 'react-router-dom'
import Header from './component/Header'
import Nav from './component/Nav'

export default function AppLayout() {
  const { colorMode } = useColorMode()
  return (
    <>
      <div data-theme={colorMode}>
        <Header />
        <div className="main-container flex p-24">
          <Nav></Nav>
          <div className="main-content w-full p-24">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}
