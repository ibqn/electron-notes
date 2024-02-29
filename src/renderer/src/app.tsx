import { Content, RootLayout, Sidebar } from '@/components'

export function App() {
  return (
    <RootLayout>
      <Sidebar className="p-2 border-4 border-red-500">sidebar</Sidebar>
      <Content className="border-4 border-blue-500">content</Content>
    </RootLayout>
  )
}
