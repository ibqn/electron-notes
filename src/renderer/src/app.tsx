import { Content, DraggableTopbar, RootLayout, Sidebar } from '@/components'

export function App() {
  return (
    <>
      <DraggableTopbar />
      <RootLayout>
        <Sidebar className="p-2 ">sidebar</Sidebar>
        <Content className="border-l border-l-white/20 bg-zinc-900/50">content</Content>
      </RootLayout>
    </>
  )
}
