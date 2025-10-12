import { cn } from '@renderer/utils'
import { ComponentProps } from 'react'

type Props = ComponentProps<'div'>

export const FloatingNoteTitle = ({ className, ...props }: Props) => {
  const title = 'Sample Note Title'
  return (
    <div {...props} className={cn('flex justify-center', className)}>
      <span className="text-gray-400">{title}</span>
    </div>
  )
}
