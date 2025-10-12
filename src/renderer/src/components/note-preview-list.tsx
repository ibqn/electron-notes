import { mockNotes } from '@/store/mocks'
import type { ComponentProps } from 'react'
import { NotePreview } from './note-preview'

type Props = ComponentProps<'ul'>

export const NotePreviewList = (props: Props) => {
  if (mockNotes.length === 0) {
    return (
      <ul {...props} className="p-4 text-center">
        <span>No notes yet</span>
      </ul>
    )
  }

  return (
    <ul {...props}>
      {mockNotes.map((note) => (
        <NotePreview key={note.title} {...note} />
      ))}
    </ul>
  )
}
