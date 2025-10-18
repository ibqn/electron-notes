import type { NoteContent, NoteInfo } from './models'

export type GetNotes = () => Promise<NoteInfo[]>
export type ReadNote = (fileName: NoteInfo['title']) => Promise<NoteContent>
export type WriteNote = (fileName: NoteInfo['title'], content: NoteContent) => Promise<void>
export type DeleteNote = (fileName: NoteInfo['title']) => Promise<boolean>
export type CreateNote = () => Promise<NoteInfo | null>
