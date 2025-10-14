import { useSetAtom } from 'jotai'
import { ActionButton, ActionButtonProps } from './action-button'
import { FaRegTrashCan } from 'react-icons/fa6'
import { deleteNoteAtom } from '@renderer/store'

export const DeleteButton = (props: ActionButtonProps) => {
  const deleteNote = useSetAtom(deleteNoteAtom)

  const handleDeletion = () => {
    deleteNote()
  }

  return (
    <ActionButton {...props} onClick={handleDeletion}>
      <FaRegTrashCan className="size-4 text-zinc-600 group-hover:text-zinc-300 dark:text-zinc-300" />
    </ActionButton>
  )
}
