import type { NoteContent, NoteInfo } from '@shared/models'
import { atom } from 'jotai'
import { unwrap } from 'jotai/utils'

const loadNotes = async (): Promise<NoteInfo[]> => {
  const notes = await window.context.getNotes()
  return notes.sort((a, b) => b.lastEditTime - a.lastEditTime)
}

export const notesAtomAsync = atom<NoteInfo[] | Promise<NoteInfo[]>>(loadNotes())

export const notesAtom = unwrap(notesAtomAsync, (prev) => prev ?? [])

export const selectedNoteIdAtom = atom<string | null>(null)

const selectedNoteAtomAsync = atom(async (get) => {
  const notes = get(notesAtom)
  const selectedNoteId = get(selectedNoteIdAtom)
  if (selectedNoteId === null) {
    return null
  }

  const selectedNote = notes.find((note) => note.id === selectedNoteId)
  if (!selectedNote) {
    return null
  }

  const noteContent = await window.context.readNote(selectedNote.title)
  return { ...selectedNote, content: noteContent }
})

export const selectedNoteAtom = unwrap(selectedNoteAtomAsync, (prev) => prev ?? null)

export const saveNoteAtomAsync = atom(null, async (get, set, content: NoteContent) => {
  const selectedNoteId = get(selectedNoteIdAtom)
  if (selectedNoteId === null) {
    return
  }

  const notes = get(notesAtom)
  const selectedNote = notes.find((note) => note.id === selectedNoteId)
  if (!selectedNote) {
    return
  }

  await window.context.writeNote(selectedNote.title, content)
  set(
    notesAtom,
    notes.map((note) =>
      note.id === selectedNoteId ? { ...note, lastEditTime: new Date().getTime() } : note
    )
  )
})

export const createEmptyNoteAtomAsync = atom(null, async (get, set) => {
  const notes = get(notesAtom)

  const newNote = await window.context.createNote()

  if (!newNote) {
    return
  }

  set(notesAtom, [newNote, ...notes])
  set(selectedNoteIdAtom, newNote.id)
})

export const deleteNoteAtomAsync = atom(null, async (get, set) => {
  const notes = get(notesAtom)
  const selectedNoteId = get(selectedNoteIdAtom)

  if (selectedNoteId === null) {
    return
  }

  const selectedNote = notes.find((note) => note.id === selectedNoteId)
  if (!selectedNote) {
    return
  }

  const confirmed = await window.context.deleteNote(selectedNote.title)
  if (!confirmed) {
    return
  }

  const newNotes = notes.filter((note) => note.id !== selectedNoteId)
  set(notesAtom, newNotes)
  set(selectedNoteIdAtom, null)
})
