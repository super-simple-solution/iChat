import { Image } from '@fluentui/react-components'
import { toPascal } from '@utils'
import './nav.scss'
import { useState } from 'react'
import { Product } from '@types'

function Nav(props: { productList: Product[]; selectProduct: (arg0: string) => void }) {
  const [productList, setProductList] = useState(props.productList)
  const handleChange = (item: { icon: string; name: string; selected: boolean }) => {
    productList.forEach((product: Product) => {
      product.selected = product.name === item.name ? true : false
    })
    setProductList(productList)
    props.selectProduct(item.name)
  }
  return (
    <>
      <div className="nav p-3">
        <div className="mb-5 text-xl">Getting Started</div>
        <div className="type-list">
          {productList.map((item, index) => (
            <div
              className={`type-item ${item.selected ? 'select' : ''}`}
              key={index}
              onClick={() => handleChange(item)}
            >
              <div className="flex-x-center items-center">
                <div className={`mr-[20px] h-[20px] w-[2px] ${item.selected ? 'bg-purple-600' : ''}`}></div>
                <Image className="mr-3 w-20" src={`/src/assets/svg/${item.icon}-logo.svg`} alt={item.icon} />
                <span>{item.icon === 'chatgpt' ? 'ChatGPT' : toPascal(item.icon)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Nav
