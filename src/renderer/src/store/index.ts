import type { NoteInfo } from '@shared/models'
import { atom } from 'jotai'
import { mockNotes } from './mocks'
import { uuid } from '@/utils/uuid'

export const notesAtom = atom<NoteInfo[]>(mockNotes)

export const selectedNoteIdAtom = atom<string | null>(null)

export const selectedNoteAtom = atom((get) => {
  const notes = get(notesAtom)
  const selectedNoteId = get(selectedNoteIdAtom)
  if (selectedNoteId === null) {
    return null
  }
  const selectedNote = notes.find((note) => note.id === selectedNoteId)
  if (!selectedNote) {
    return null
  }
  return { ...selectedNote, content: `# ${selectedNote.title}\n\nStart writing your note here...` }
})

export const createEmptyNoteAtom = atom(null, (get, set) => {
  const notes = get(notesAtom)

  const title = `Untitled ${notes.length + 1}`
  const newNote: NoteInfo = { id: uuid(), title, lastEditTime: new Date().getTime() }
  set(notesAtom, [newNote, ...notes])
  set(selectedNoteIdAtom, newNote.id)
})

export const deleteNoteAtom = atom(null, (get, set) => {
  const notes = get(notesAtom)
  const selectedNoteId = get(selectedNoteIdAtom)

  if (selectedNoteId === null) {
    return
  }

  const newNotes = notes.filter((note) => note.id !== selectedNoteId)
  set(notesAtom, newNotes)
  set(selectedNoteIdAtom, null)
})
