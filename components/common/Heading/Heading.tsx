import { FC } from 'react'

type HeadingProps = {
  text: string
  level?: 1 | 2 | 3 | 4 | 5 | 6
  className?: string
}

const Heading: FC<HeadingProps> = ({ text, level = 1, className = '' }) => {
  const size = {
    1: 'text-4xl',
    2: 'text-3xl',
    3: 'text-2xl',
    4: 'text-xl',
    5: 'text-lg',
    6: 'text-base',
  }

  return <p className={`${size[level]} font-bold ${className}`}>{text}</p>
}

export default Heading
