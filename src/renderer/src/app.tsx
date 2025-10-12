import {
  Content,
  DraggableTopbar,
  NotePreviewList,
  RootLayout,
  Sidebar,
  MarkdownEditor,
  FloatingNoteTitle
} from '@/components'
import { ActionButtonRow } from '@/components/button'

export function App() {
  return (
    <>
      <DraggableTopbar />
      <RootLayout>
        <Sidebar className="p-2">
          <ActionButtonRow className="mt-1 flex justify-between" />
          <NotePreviewList className="mt-3 space-y-1" />
        </Sidebar>
        <Content className="border-l border-l-white/20 bg-zinc-900/50">
          <FloatingNoteTitle className="pt-2" />
          <MarkdownEditor />
        </Content>
      </RootLayout>
    </>
  )
}
