import { appDirectoryName, fileEncoding } from '@shared/constants'
import { NoteInfo } from '@shared/models'
import { ensureDir, readdir, stat } from 'fs-extra'
import { homedir } from 'os'
import { randomUUID } from 'crypto'
import type { GetNotes } from '@shared/types'

export const uuid = (): string => randomUUID()

export const getRootDir = () => `${homedir()}/${appDirectoryName}`

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
  const fileStats = await stat(`${getRootDir()}/${fileName}`)

  return {
    id: uuid(),
    title: fileName.replace(/\.md$/, ''),
    lastEditTime: fileStats.mtimeMs
  }
}
