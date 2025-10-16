import { appDirectoryName, fileEncoding } from '@shared/constants'
import { NoteInfo } from '@shared/models'
import { ensureDir, readdir, readFile, stat } from 'fs-extra'
import { homedir } from 'os'
import { randomUUID } from 'crypto'
import type { GetNotes, ReadNote } from '@shared/types'
import path from 'path'

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

export const readNote: ReadNote = async (fileName: string): Promise<string> => {
  const rootDir = getRootDir()

  return readFile(path.join(rootDir, `${fileName}.md`), {
    encoding: fileEncoding
  })
}
