import { cn } from '@/utils'
import type { ComponentProps } from 'react'

type Props = ComponentProps<'header'>

export const DraggableTopbar = ({ className, ...props }: Props) => {
  return <header {...props} className={cn('absolute inset-0 h-8 bg-transparent', className)} />
}
