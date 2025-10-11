import { mockNotes } from '@/store/mocks'
import type { ComponentProps } from 'react'

type Props = ComponentProps<'ul'>

export const NotePreviewList = (props: Props) => {
  return (
    <ul {...props}>
      {mockNotes.map((note) => (
        <li key={note.title}>{note.title}</li>
      ))}
    </ul>
  )
}
