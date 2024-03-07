import { cn } from '@renderer/utils'
import { type ComponentProps } from 'react'

export type ActionButtonProps = ComponentProps<'button'>

export const ActionButton = ({ className, ...props }: ActionButtonProps) => {
  return (
    <button
      {...props}
      className={cn(
        'px-2 py-1 rounded-md border border-zinc-400/50 transition-colors hover:bg-zinc-600/50 duration-100',
        className
      )}
    />
  )
}
