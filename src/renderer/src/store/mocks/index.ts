import { NoteInfo } from '@shared/models'
import { subDays } from 'date-fns'

export const mockNotes: NoteInfo[] = [
  { title: 'Welcome 👋', lastEditTime: new Date().getTime() },
  { title: 'First Note', lastEditTime: subDays(new Date(), 1).getTime() },
  { title: 'Second Note', lastEditTime: subDays(new Date(), 2).getTime() },
  { title: 'Third Note', lastEditTime: subDays(new Date(), 7).getTime() }
]
