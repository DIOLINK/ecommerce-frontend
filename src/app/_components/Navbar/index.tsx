'use client'
import ThemeController from '@/app/_components/Theme/Controller'
import { ROUTES } from '@/app/_config'
import { useNavBar } from '@/app/_hooks'

import Link from 'next/link'

const NavbarComponent = () => {
  const { title } = useNavBar()
  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="flex-1">
        <Link href={ROUTES.PAGES.HOME.PATH} className="btn btn-ghost text-xl">
          {title}
        </Link>
      </div>
      <div className="flex-none">
        <ThemeController />
      </div>
    </div>
  )
}
export default NavbarComponent
