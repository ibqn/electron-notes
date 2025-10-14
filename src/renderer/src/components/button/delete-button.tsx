import { ActionButton, ActionButtonProps } from './action-button'
import { FaRegTrashCan } from 'react-icons/fa6'

export const DeleteButton = (props: ActionButtonProps) => {
  return (
    <ActionButton {...props}>
      <FaRegTrashCan className="size-4 text-zinc-600 group-hover:text-zinc-300 dark:text-zinc-300" />
    </ActionButton>
  )
}
