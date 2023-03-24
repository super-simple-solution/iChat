import { Textarea } from '@fluentui/react-components'
import { useState } from 'react'

function Home() {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  return (
    <>
      <div className="Home text-center text-lg font-semibold">ChatGPT</div>
      <div className="flex h-full flex-col justify-between">
        <Textarea placeholder="Here is a sample placeholder" />
        {/* <InputGroup size="lg">
          <Input variant="unstyled" pr="4.5rem" type="text" placeholder="Ask me anything..." />
          <InputRightElement width="4.5rem">
            <Button colorScheme="twitter" size="lg " onClick={handleClick}>
              Send
            </Button>
          </InputRightElement>
        </InputGroup> */}
      </div>
    </>
  )
}

export default Home
