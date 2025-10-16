import { useSetAtom } from 'jotai'
import { ActionButton, ActionButtonProps } from './action-button'
import { LuFilePenLine } from 'react-icons/lu'
import { createEmptyNoteAtomAsync } from '@renderer/store'

export const NewNoteButton = (props: ActionButtonProps) => {
  const createEmptyNote = useSetAtom(createEmptyNoteAtomAsync)

  const handleCreation = () => {
    createEmptyNote()
  }

  return (
    <ActionButton {...props} onClick={handleCreation}>
      <LuFilePenLine className="size-4 text-zinc-600 group-hover:text-zinc-300 dark:text-zinc-300" />
    </ActionButton>
  )
}
