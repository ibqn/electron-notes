import { cn } from '@renderer/utils'
import { forwardRef, type ComponentProps } from 'react'

type RootProps = ComponentProps<'main'>

export const RootLayout = ({ className, children, ...props }: RootProps) => {
  return (
    <main {...props} className={cn('flex flex-row h-screen', className)}>
      {children}
    </main>
  )
}

type SidebarProps = ComponentProps<'aside'>

export const Sidebar = ({ className, children, ...props }: SidebarProps) => {
  return (
    <aside {...props} className={cn('w-[250px] h-[100vh+10px] overflow-hidden mt-10', className)}>
      {children}
    </aside>
  )
}

type ContentProps = ComponentProps<'div'>

export const Content = forwardRef<HTMLDivElement, ContentProps>(({ className, ...props }, ref) => {
  return <div {...props} ref={ref} className={cn('flex-1 overflow-auto', className)} />
})
