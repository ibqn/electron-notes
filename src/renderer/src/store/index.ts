import type { NoteInfo } from '@shared/models'
import { atom } from 'jotai'
import { unwrap } from 'jotai/utils'
import { uuid } from '@/utils/uuid'

const loadNotes = async (): Promise<NoteInfo[]> => {
  const notes = await window.context.getNotes()
  return notes.sort((a, b) => b.lastEditTime - a.lastEditTime)
}

export const notesAtomAsync = atom<NoteInfo[] | Promise<NoteInfo[]>>(loadNotes())

export const notesAtom = unwrap(notesAtomAsync, (prev) => prev ?? [])

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
