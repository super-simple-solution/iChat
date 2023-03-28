import { Image } from '@fluentui/react-components'
import { toPascal } from '@utils'
import './nav.scss'
import { useState } from 'react'
import { Product } from '@types'
import { Avatar } from '@fluentui/react-components'

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
      <div className="nav rounded-l-lg p-4">
        <div className="type-list ">
          {productList.map((item, index) => (
            <div
              className={`type-item py-3 ${item.selected ? 'select' : ''}`}
              key={index}
              onClick={() => handleChange(item)}
            >
              <div className="flex-x-center items-center pl-2">
                <Avatar
                  aria-label={item.icon}
                  className="mr-3"
                  active={item.selected ? 'active' : 'unset'}
                  image={{
                    src: `/src/assets/svg/${item.icon}-logo.svg`,
                  }}
                />
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
