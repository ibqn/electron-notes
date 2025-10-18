import {
  Content,
  DraggableTopbar,
  NotePreviewList,
  RootLayout,
  Sidebar,
  MarkdownEditor,
  FloatingNoteTitle,
} from '@/components'
import { ActionButtonRow } from '@/components/button'
import { useRef } from 'react'

export function App() {
  const contentContainerRef = useRef<HTMLDivElement>(null)

  const resetScroll = () => {
    contentContainerRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <DraggableTopbar />
      <RootLayout>
        <Sidebar className="p-2">
          <ActionButtonRow className="mt-1 flex justify-between" />
          <NotePreviewList className="mt-3 space-y-1" onNoteSelect={resetScroll} />
        </Sidebar>
        <Content ref={contentContainerRef} className="border-l border-l-white/20 bg-zinc-900/50">
          <FloatingNoteTitle className="pt-2" />
          <MarkdownEditor />
        </Content>
      </RootLayout>
    </>
  )
}
