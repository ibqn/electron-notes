import { cn } from '@/utils'
import type { NoteInfo } from '@shared/models'
import type { ComponentProps } from 'react'
import { format, formatDistanceToNow, isToday, isYesterday } from 'date-fns'

type Props = NoteInfo & {
  isActive?: boolean
} & ComponentProps<'li'>

const formatNoteTime = (timestamp: number): string => {
  const date = new Date(timestamp)

  if (isToday(date)) {
    return `Today ${format(date, 'HH:mm')}`
  }

  if (isYesterday(date)) {
    return `Yesterday ${format(date, 'HH:mm')}`
  }

  // For recent dates (within 7 days), show relative time
  const daysDiff = Math.floor((Date.now() - timestamp) / (1000 * 60 * 60 * 24))
  if (daysDiff < 7) {
    return formatDistanceToNow(date, { addSuffix: true })
  }

  // For older dates, show formatted date
  return format(date, 'MMM d, yyyy')
}

export const NotePreview = ({
  title,
  lastEditTime,
  isActive = false,
  className,
  ...props
}: Props) => {
  return (
    <li
      {...props}
      className={cn(
        'cursor-pointer rounded-md px-2.5 py-3 transition-colors duration-75',
        'group hover:text-white',
        isActive ? 'bg-zinc-400/75' : 'hover:bg-zinc-500/75',
        className
      )}
    >
      <h3 className="truncate font-bold">{title}</h3>
      <span className="w-full text-left text-xs font-light text-zinc-600 group-hover:text-zinc-300 dark:text-zinc-400">
        {formatNoteTime(lastEditTime)}
      </span>
    </li>
  )
}
