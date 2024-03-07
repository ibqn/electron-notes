import { ComponentProps } from 'react'
import { DeleteButton } from './delete-button'
import { NewNoteButton } from './new-note-button'

type Props = ComponentProps<'div'>

export const ActionButtonRow = (props: Props) => {
  return (
    <div {...props}>
      <NewNoteButton />
      <DeleteButton />
    </div>
  )
}
