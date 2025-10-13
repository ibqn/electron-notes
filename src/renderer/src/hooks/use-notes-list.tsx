import { notesAtom, selectedNoteIndexAtom } from '@renderer/store'
import { useAtom, useAtomValue } from 'jotai'

export const useNotesList = ({ onNoteSelect }: { onNoteSelect?: () => void } = {}) => {
  const notes = useAtomValue(notesAtom)

  const [selectedNoteIndex, setSelectedNoteIndex] = useAtom(selectedNoteIndexAtom)

  const handleNoteSelect = (index: number) => async () => {
    setSelectedNoteIndex(index)

    onNoteSelect?.()
  }

  return { notes, selectedNoteIndex, handleNoteSelect }
}
