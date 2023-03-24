import { Image } from '@fluentui/react-components'
import { toPascal } from '@/utils'
import './nav.scss'

const list = [
  {
    icon: 'chatgpt',
    select: true,
  },
  {
    icon: 'bing',
  },
  {
    icon: 'bard',
  },
]

function Nav() {
  return (
    <>
      <div className="nav p-3">
        <div className="mb-5 text-xl">Getting Started</div>
        <div className="type-list">
          {list.map((item, index) => (
            <div className={`type-item ${item.select ? 'select' : ''}`} key={index}>
              <div className="flex-x-center items-center">
                <div className={`mr-[20px] h-[20px] w-[2px] ${item.select ? 'bg-purple-600' : ''}`}></div>
                <Image className="mr-3 w-20" src={`/src/assets/svg/${item.icon}-logo.svg`} alt={item.icon} />
                <span>{toPascal(item.icon)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Nav
