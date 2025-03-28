import { FooterComponent, NavbarComponent } from '@/app/_components'

interface LayoutProps {
  children: React.ReactNode
  footerContent?: React.ReactNode
}
const Layout = ({ children, footerContent }: LayoutProps) => {
  return (
    <>
      <NavbarComponent />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          {children}
        </main>

        <FooterComponent />
      </div>
    </>
  )
}

export default Layout
