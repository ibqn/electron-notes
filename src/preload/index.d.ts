import type { GetNotes } from '@shared/types'

declare global {
  interface Window {
    context: {
      locale: string
      getNotes: GetNotes
    }
  }
}
