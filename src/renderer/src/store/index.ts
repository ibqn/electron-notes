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

export const createEmptyNoteAtom = atom(null, (get, set) => {
  const notes = get(notesAtom)

  const title = `Untitled ${notes.length + 1}`
  const newNote: NoteInfo = { title, lastEditTime: new Date().getTime() }
  set(notesAtom, [newNote, ...notes])
  set(selectedNoteIndexAtom, 0)
})

export const deleteNoteAtom = atom(null, (get, set) => {
  const notes = get(notesAtom)
  const selectedNoteIndex = get(selectedNoteIndexAtom)

  if (selectedNoteIndex === null) {
    return
  }

  const newNotes = notes.filter((_, index) => index !== selectedNoteIndex)
  set(notesAtom, newNotes)
  set(selectedNoteIndexAtom, null)
})
