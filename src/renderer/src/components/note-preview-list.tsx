import { mockNotes } from '@/store/mocks'
import type { ComponentProps } from 'react'
import { NotePreview } from './note-preview'

type Props = ComponentProps<'ul'>

export const NotePreviewList = (props: Props) => {
  return (
    <ul {...props}>
      {mockNotes.map((note) => (
        <NotePreview key={note.title} {...note} />
      ))}
    </ul>
  )
}
