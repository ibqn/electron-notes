import type { GetNotes, ReadNote } from '@shared/types'
import { contextBridge, ipcRenderer } from 'electron'

if (!process.contextIsolated) {
  throw new Error('contextIsolation must be enabled in the BrowserWindow ')
}

try {
  contextBridge.exposeInMainWorld('context', {
    locale: navigator.language,
    getNotes: (...args: Parameters<GetNotes>) => ipcRenderer.invoke('get-notes', ...args),
    readNote: (...args: Parameters<ReadNote>) => ipcRenderer.invoke('read-note', ...args)
  })
} catch (error) {
  console.error(error)
}
