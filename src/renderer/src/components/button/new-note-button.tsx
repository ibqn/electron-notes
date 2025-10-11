import { ActionButton, ActionButtonProps } from './action-button'
import { LuFilePenLine } from 'react-icons/lu'

export const NewNoteButton = (props: ActionButtonProps) => {
  return (
    <ActionButton>
      <LuFilePenLine className="size-4 text-zinc-300" />
    </ActionButton>
  )
}
