import { ActionButton, ActionButtonProps } from './action-button'
import { LuFileSignature } from 'react-icons/lu'

export const NewNoteButton = (props: ActionButtonProps) => {
  return (
    <ActionButton>
      <LuFileSignature className="size-4 text-zinc-300" />
    </ActionButton>
  )
}
