import cx from 'classnames'
import { FC, PropsWithChildren } from 'react'

interface Props {
  color: 'primary' | 'flat'
  className?: string
}

const MessageBubble: FC<PropsWithChildren<Props>> = (props) => {
  return (
    <div
      className={cx(
        'px-4 py-2 text-neutral-500',
        props.color === 'primary' ? '' : 'shadow-light rounded-lg',
        props.className,
      )}
    >
      {props.children}
    </div>
  )
}

export default MessageBubble
