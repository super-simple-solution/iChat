import { Image } from '@nextui-org/react'
import './nav.scss'
function Nav() {
  return (
    <>
      <div className="nav">
        <div className="chat-type">CHAT TYPE</div>
        <div className="type-list">
          <div className="type-item">
            <Image src={'/src/assets/svg/chat.svg'} width={40} />
            <div className="item-text">English Translate</div>
            <Image src={'/src/assets/svg/more.svg'} width={40} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Nav
