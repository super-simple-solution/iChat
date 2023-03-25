import { Outlet } from 'react-router-dom'
import Header from './component/Header'
import Nav from './component/Nav'
import { FluentProvider, webDarkTheme, webLightTheme } from '@fluentui/react-components'
import { useState } from 'react'
import { productList } from '@const/index'

export default function AppLayout() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const toggleTheme = () => setIsDarkMode(!isDarkMode)

  const [curProduct, setProduct] = useState('chatgpt')
  const handleSelectProduct = (value: string) => {
    setProduct(value)
  }

  return (
    <>
      <FluentProvider theme={isDarkMode ? webDarkTheme : webLightTheme}>
        <div className={`h-screen w-screen overflow-hidden ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
          <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} curProduct={curProduct} />
          <div className="main-container flex h-[calc(100vh_-_69px)]">
            <Nav productList={productList} selectProduct={handleSelectProduct}></Nav>
            <div className="main-content w-full">
              <Outlet />
            </div>
          </div>
        </div>
      </FluentProvider>
    </>
  )
}
