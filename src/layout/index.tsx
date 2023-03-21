import { Outlet } from 'react-router-dom'
import ChangeMode from './component/changeMode'


export default function AppLayout() {
  return (
    <>
      <div >
        <div>
          <ChangeMode />
        </div>
        <div className="main-container p-24">
          <Outlet />
        </div>
      </div>
    </>
  )
}
