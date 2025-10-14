import type { ComponentProps } from 'react'
import { NotePreview } from './note-preview'
import { useNotesList } from '@/hooks/use-notes-list'

type Props = ComponentProps<'ul'> & {
  onNoteSelect?: () => void
}

export const NotePreviewList = ({ onNoteSelect, ...props }: Props) => {
  const { notes, selectedNoteId, handleNoteSelect } = useNotesList({ onNoteSelect })

  if (notes.length === 0) {
    return (
      <ul {...props} className="p-4 text-center">
        <span>No notes yet</span>
      </ul>
    )
  }

  return (
    <ul {...props}>
      {notes.map((note) => (
        <NotePreview
          key={note.id}
          {...note}
          isActive={selectedNoteId === note.id}
          onClick={handleNoteSelect(note.id)}
        />
      ))}
    </ul>
  )
}
