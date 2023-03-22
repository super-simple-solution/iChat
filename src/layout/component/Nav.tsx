import './nav.scss'
import { CiChat1 } from 'react-icons/ci'

function Nav() {
  return (
    <>
      <div className="nav">
        <div className="chat-type">CHAT TYPE</div>
        <div className="type-list">
          <div className="type-item">
            <CiChat1 />
            <div className="item-text">English Translate</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Nav
