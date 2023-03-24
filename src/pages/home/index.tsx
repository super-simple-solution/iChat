import {
  makeStyles,
  shorthands,
  useId,
  Body1,
  Button,
  Input,
  Label,
  Text,
  ButtonProps,
} from '@fluentui/react-components'

import { PersonRegular, MicRegular } from '@fluentui/react-icons'
import { useState } from 'react'

// const useStyles = makeStyles({
//   root: {
//     display: 'flex',
//     flexDirection: 'column',
//     ...shorthands.gap('20px'),
//     // Prevent the example from taking the full width of the page (optional)
//     maxWidth: '400px',
//     // Stack the label above the field (with 2px gap per the design system)
//     '> div': {
//       display: 'flex',
//       flexDirection: 'column',
//       ...shorthands.gap('2px'),
//     },
//   },
// })

function Home() {
  const beforeId = useId('content-before')
  return (
    <>
      <div className="mt-[-24px] flex h-full flex-col  justify-between">
        <div className="h-full w-full rounded-3xl bg-neutral-400  p-24">
          <div className="mb-24 border-b-[1px] border-neutral-600 pb-24 text-center text-lg font-semibold">ChatGPT</div>
        </div>
        <Input contentBefore={<PersonRegular />} id={beforeId} className="mt-24" />
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
