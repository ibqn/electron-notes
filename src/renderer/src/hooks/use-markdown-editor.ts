import { saveNoteAtomAsync, selectedNoteAtom } from '@/store'
import type { MDXEditorMethods } from '@mdxeditor/editor'
import { autoSaveInterval } from '@shared/constants'
import { NoteContent } from '@shared/models'
import { useAtomValue, useSetAtom } from 'jotai'
import { throttle } from 'lodash-es'
import { useRef } from 'react'

export const useMarkdownEditor = () => {
  const selectedNote = useAtomValue(selectedNoteAtom)
  const mdxEditorRef = useRef<MDXEditorMethods>(null)
  const saveNote = useSetAtom(saveNoteAtomAsync)

  const handleAutoSaving = throttle(
    async (content: NoteContent) => {
      if (!selectedNote) {
        return
      }

      console.log('auto saving')
      await saveNote(content)
    },
    autoSaveInterval,
    {
      leading: false,
      trailing: true
    }
  )

  const handleBlur = async () => {
    handleAutoSaving.cancel()

    const content = mdxEditorRef.current?.getMarkdown()

    if (content) {
      await saveNote(content)
    }
  }

  return { selectedNote, mdxEditorRef, handleAutoSaving, handleBlur }
}
