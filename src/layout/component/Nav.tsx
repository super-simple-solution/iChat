import { Image } from '@fluentui/react-components'
import { toPascal } from '@/utils'
import './nav.scss'

const list = [
  {
    icon: 'canada',
    lable: 'canada',
    active: true,
  },
  {
    icon: 'draw',
    lable: 'draw',
  },
  {
    icon: 'home',
    lable: 'home',
  },
  {
    icon: 'hot',
    lable: 'hot',
  },
  {
    icon: 'translate',
    lable: 'translate',
  },
]

function Nav() {
  return (
    <>
      <div className="nav">
        <div className="chat-type">CHAT TYPE</div>
        <div className="type-list">
          {list.map((item, index) => (
            <div className="type-item" key={index}>
              <div className="flex-x-center items-center">
                <Image className="mr-2 w-20" src={`/src/assets/svg/${item.icon}.svg`} alt={item.lable} />
                <span>{toPascal(item.lable)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Nav
