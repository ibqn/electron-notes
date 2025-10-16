import {
  headingsPlugin,
  linkPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  MDXEditor,
  quotePlugin
} from '@mdxeditor/editor'
import '@mdxeditor/editor/style.css'
import { cn } from '@/utils'
import { useMarkdownEditor } from '@/hooks/use-markdown-editor'
import { useEffect } from 'react'
import { throttle } from 'lodash-es'
import { autoSaveInterval } from '@shared/constants'

export const MarkdownEditor = () => {
  const { selectedNote, mdxEditorRef, handleAutoSaving } = useMarkdownEditor()

  useEffect(() => {
    console.log('selectedNote changed', selectedNote)
    mdxEditorRef.current?.setMarkdown(selectedNote?.content ?? '')
  }, [selectedNote, mdxEditorRef])

  return (
    <div>
      <MDXEditor
        ref={mdxEditorRef}
        markdown={selectedNote?.content ?? ''}
        onChange={throttle(handleAutoSaving, autoSaveInterval, {
          leading: false,
          trailing: true
        })}
        plugins={[
          headingsPlugin(),
          linkPlugin(),
          listsPlugin(),
          quotePlugin(),
          markdownShortcutPlugin()
        ]}
        contentEditableClassName={cn(
          'caret-yellow-500 prose dark:prose-invert min-h-full text-lg px-8 py-5 outline-none max-w-nonet',
          "prose-p:my-3 prose-p:leading-relaxed prose-headings:my-4 prose-blockquote:my-4 prose-ul:my-2 prose-li:my-0 prose-code:px-1 prose-code:text-red-500 prose-code:before:content-[''] prose-code:after:content-['']"
        )}
      />
    </div>
  )
}
