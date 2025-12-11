import type { HTMLAttributes, ReactNode } from 'react'

export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  color?: 'primary' | 'secondary'
}
