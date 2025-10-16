import { saveNoteAtomAsync, selectedNoteAtom } from '@/store'
import type { MDXEditorMethods } from '@mdxeditor/editor'
import { NoteContent } from '@shared/models'
import { useAtomValue, useSetAtom } from 'jotai'
import { useRef } from 'react'

export const useMarkdownEditor = () => {
  const selectedNote = useAtomValue(selectedNoteAtom)
  const mdxEditorRef = useRef<MDXEditorMethods>(null)
  const saveNote = useSetAtom(saveNoteAtomAsync)

  const handleAutoSaving = async (content: NoteContent) => {
    if (!selectedNote) {
      return
    }

    console.log('auto saving')
    await saveNote(content)
  }

  return { selectedNote, mdxEditorRef, handleAutoSaving }
}
