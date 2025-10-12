import { cn } from '@/utils'
import type { ComponentProps } from 'react'

export type ActionButtonProps = ComponentProps<'button'>

export const ActionButton = ({ className, ...props }: ActionButtonProps) => {
  return (
    <button
      {...props}
      className={cn(
        'group rounded-md border border-zinc-400/50 px-2 py-1 transition-colors duration-100 hover:bg-zinc-600/50',
        className
      )}
    />
  )
}
