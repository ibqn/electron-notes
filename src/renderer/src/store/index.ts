import type { NoteInfo } from '@shared/models'
import { atom } from 'jotai'
import { mockNotes } from './mocks'

export const notesAtom = atom<NoteInfo[]>(mockNotes)

export const selectedNoteIndexAtom = atom<number | null>(null)

export const selectedNoteAtom = atom((get) => {
  const notes = get(notesAtom)
  const selectedNoteIndex = get(selectedNoteIndexAtom)
  if (selectedNoteIndex === null) {
    return null
  }
  const selectedNote = notes[selectedNoteIndex]

  return { ...selectedNote, content: `# ${selectedNote.title}\n\nStart writing your note here...` }
})
