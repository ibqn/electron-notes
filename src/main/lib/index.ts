import { appDirectoryName, fileEncoding } from '@shared/constants'
import type { NoteContent, NoteInfo } from '@shared/models'
import { ensureDir, readdir, readFile, stat, writeFile, remove } from 'fs-extra'
import { homedir } from 'os'
import { randomUUID } from 'crypto'
import type { DeleteNote, GetNotes, ReadNote, WriteNote } from '@shared/types'
import path from 'path'
import { dialog } from 'electron'

export const uuid = (): string => randomUUID()

export const getRootDir = () => path.join(homedir(), appDirectoryName)

export const getNotes: GetNotes = async () => {
  const notesDir = getRootDir()

  await ensureDir(notesDir)

  const notesFileNames = await readdir(notesDir, {
    encoding: fileEncoding,
    withFileTypes: false
  })

  const notes = notesFileNames.filter((name) => name.endsWith('.md'))

  return Promise.all(notes.map(getNoteInfoFromFileName))
}

export const getNoteInfoFromFileName = async (fileName: string): Promise<NoteInfo> => {
  const fileStats = await stat(path.join(getRootDir(), fileName))

  return {
    id: uuid(),
    title: fileName.replace(/\.md$/, ''),
    lastEditTime: fileStats.mtimeMs
  }
}

export const readNote: ReadNote = async (fileName): Promise<NoteContent> => {
  const rootDir = getRootDir()
  return readFile(path.join(rootDir, `${fileName}.md`), {
    encoding: fileEncoding
  })
}

export const writeNote: WriteNote = async (fileName, content): Promise<void> => {
  const rootDir = getRootDir()

  return writeFile(path.join(rootDir, `${fileName}.md`), content, { encoding: fileEncoding })
}

export const deleteNote: DeleteNote = async (fileName): Promise<boolean> => {
  const rootDir = getRootDir()

  const { response } = await dialog.showMessageBox({
    type: 'question',
    title: 'Delete node',
    message: 'Are you sure that you want to delete?',
    buttons: ['Delete', 'Cancel'],
    defaultId: 1,
    cancelId: 1
  })

  if (response == 1) {
    return false
  }

  await remove(path.join(rootDir, `${fileName}.md`))
  return true
}
