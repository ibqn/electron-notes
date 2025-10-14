import { cn } from '@/utils'
import type { ComponentProps } from 'react'

type RootProps = ComponentProps<'main'>

export const RootLayout = ({ className, children, ...props }: RootProps) => {
  return (
    <main {...props} className={cn('flex h-screen flex-row', className)}>
      {children}
    </main>
  )
}

type SidebarProps = ComponentProps<'aside'>

export const Sidebar = ({ className, children, ...props }: SidebarProps) => {
  return (
    <aside
      {...props}
      className={cn('mt-10 h-[calc(100vh+10px)] w-[250px] overflow-hidden', className)}
    >
      {children}
    </aside>
  )
}

type ContentProps = ComponentProps<'div'>

export const Content = ({ ref, className, ...props }: ContentProps) => {
  return <div {...props} ref={ref} className={cn('flex-1 overflow-auto', className)} />
}
