import { ActionButton, ActionButtonProps } from './action-button'
import { FaRegTrashCan } from 'react-icons/fa6'

export const DeleteButton = (props: ActionButtonProps) => {
  return (
    <ActionButton>
      <FaRegTrashCan className="size-4 text-zinc-300" />
    </ActionButton>
  )
}
