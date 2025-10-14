import { notesAtom, selectedNoteIdAtom } from '@renderer/store'
import { useAtom, useAtomValue } from 'jotai'

export const useNotesList = ({ onNoteSelect }: { onNoteSelect?: () => void } = {}) => {
  const notes = useAtomValue(notesAtom)

  const [selectedNoteId, setSelectedNoteId] = useAtom(selectedNoteIdAtom)

  const handleNoteSelect = (id: string) => async () => {
    setSelectedNoteId(id)

    onNoteSelect?.()
  }

  return { notes, selectedNoteId, handleNoteSelect }
}
