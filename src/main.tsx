import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '@/styles/index.scss'
import { BrowserRouter as Router } from 'react-router-dom'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { lightTheme, darkTheme } from '@/theme'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider>
        <Router>
          <App />
        </Router>
      </NextUIProvider>
    </NextThemesProvider>
  </React.StrictMode>,
)
