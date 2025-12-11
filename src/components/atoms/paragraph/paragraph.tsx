import './paragraph.css'
import type { ParagraphProps } from './paragraph.types'

export const Paragraph = ({ children, size, color, ...rest }: ParagraphProps) => {
  const paragraphClasses = `paragraph paragraph-size--${size} paragraph-color--${color}`

  return (
    <p className={paragraphClasses} {...rest}>
      {children}
    </p>
  )
}
