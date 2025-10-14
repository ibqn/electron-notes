import { uuid } from '@/utils/uuid'
import type { NoteInfo } from '@shared/models'
import { subDays } from 'date-fns'

export const mockNotes: NoteInfo[] = [
  {
    id: uuid(),
    title: 'Welcome 👋',
    lastEditTime: new Date().getTime()
  },
  {
    id: uuid(),
    title: 'First Note',
    lastEditTime: subDays(new Date(), 1).getTime()
  },
  {
    id: uuid(),
    title: 'Second Note',
    lastEditTime: subDays(new Date(), 2).getTime()
  },
  {
    id: uuid(),
    title: 'Third Note',
    lastEditTime: subDays(new Date(), 7).getTime()
  }
]
