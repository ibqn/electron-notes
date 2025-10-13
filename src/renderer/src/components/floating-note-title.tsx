import { selectedNoteAtom } from '@renderer/store'
import { cn } from '@renderer/utils'
import { useAtomValue } from 'jotai'
import { ComponentProps } from 'react'

type Props = ComponentProps<'div'>

export const FloatingNoteTitle = ({ className, ...props }: Props) => {
  const selectedNote = useAtomValue(selectedNoteAtom)

  if (!selectedNote) {
    return null
  }

  return (
    <div {...props} className={cn('flex justify-center', className)}>
      <span className="text-gray-400">{selectedNote.title}</span>
    </div>
  )
}
