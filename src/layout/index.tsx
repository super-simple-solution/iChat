import { Outlet } from 'react-router-dom'
import Header from './component/Header'
import Nav from './component/Nav'
import { getLocalStorage, setLocalStorage } from '@utils/storage'
import { FluentProvider, webDarkTheme, webLightTheme } from '@fluentui/react-components'
import { useState, useEffect } from 'react'
import { productList } from '@const/index'

export default function AppLayout() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  useEffect(() => {
    setIsDarkMode(getLocalStorage('isDarkMode'))
  }, [])
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    setLocalStorage('isDarkMode', !isDarkMode)
  }

  const [curProduct, setProduct] = useState('chatgpt')
  const handleSelectProduct = (value: string) => {
    setProduct(value)
  }

  return (
    <>
      <FluentProvider theme={isDarkMode ? webDarkTheme : webLightTheme}>
        <div
          className={`main-wrapper flex h-screen w-screen overflow-hidden ${isDarkMode ? 'dark-mode' : 'light-mode'}`}
        >
          <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
          <div className="main-container flex flex-auto">
            {/* <Nav productList={productList} selectProduct={handleSelectProduct}></Nav> */}
            <div className="main-content w-full rounded-r-lg">
              <Outlet />
            </div>
          </div>
        </div>
      </FluentProvider>
    </>
  )
}
