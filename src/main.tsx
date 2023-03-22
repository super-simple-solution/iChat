import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '@/styles/index.scss'
import { BrowserRouter as Router } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { ColorModeProvider } from '@chakra-ui/color-mode'
import theme from './theme/index'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeProvider>
        <Router>
          <App />
        </Router>
      </ColorModeProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
