import { Image } from '@fluentui/react-components'
import { toPascal } from '@/utils'
import './nav.scss'
import { useState } from 'react'

const list = [
  {
    icon: 'chatgpt',
    select: true,
  },
  {
    icon: 'bing',
    select: false,
  },
  {
    icon: 'bard',
    select: false,
  },
]

function Nav(props: { selectProduct: (arg0: string) => void }) {
  const [productList, setProductList] = useState(list)
  const handleChange = (item: { icon: any; select?: boolean }) => {
    const updatedProductList = productList.map((product) => ({
      icon: product.icon,
      select: product.icon === item.icon ? true : false,
    }))
    setProductList(updatedProductList)
    const curProduct = updatedProductList.find((product) => product.select)?.icon || 'chatgpt'
    props.selectProduct(curProduct)
  }
  return (
    <>
      <div className="nav p-3">
        <div className="mb-5 text-xl">Getting Started</div>
        <div className="type-list">
          {productList.map((item, index) => (
            <div className={`type-item ${item.select ? 'select' : ''}`} key={index} onClick={() => handleChange(item)}>
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
