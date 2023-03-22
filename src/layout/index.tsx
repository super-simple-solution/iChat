import { Outlet } from 'react-router-dom'
import Header from './component/Header'
import Nav from './component/Nav'

export default function AppLayout() {
  return (
    <>
      <div>
        <Header />
        <div className="main-container flex p-24">
          <Nav></Nav>
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}
