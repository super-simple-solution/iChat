import ChangeMode from './ChangeMode'
import { Image } from '@chakra-ui/react'
import { toPascal } from '@/utils'

function Header() {
  return (
    <>
      <div>
        <div className="header flex-x-between items-center px-24 py-20 text-lg">
          <div className="flex items-center">
            <Image boxSize="20px" className="mr-2" src={'/src/assets/svg/chatgpt-logo.svg'} alt="chatgpt" />
            {toPascal('ChatGPT')}
          </div>
          <div className="flex items-center">
            <Image boxSize="20px" className="mr-2" src={'/src/assets/svg/bing-logo.svg'} alt="bing" />
            {toPascal('bing')}
          </div>
          <div className="flex items-center">
            <Image boxSize="20px" className="mr-2" src={'/src/assets/svg/bard-logo.svg'} alt="bard" />
            {toPascal('bard')}
          </div>
          <ChangeMode />
        </div>
      </div>
    </>
  )
}

export default Header
