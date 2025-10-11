import { Content, DraggableTopbar, RootLayout, Sidebar } from '@/components'
import { ActionButtonRow } from '@/components/button'

export function App() {
  return (
    <>
      <DraggableTopbar />
      <RootLayout>
        <Sidebar className="p-2">
          <ActionButtonRow className="mt-1 flex justify-between" />
        </Sidebar>
        <Content className="border-l border-l-white/20 bg-zinc-900/50">content</Content>
      </RootLayout>
    </>
  )
}
