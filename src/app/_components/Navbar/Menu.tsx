import { ROUTES } from '@/app/_config'
import Link from 'next/link'
import ThemeController from '../Theme/Controller'

export default function Menu() {
  return (
    <ul
      tabIndex={0}
      className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
    >
      <li>
        <a className="justify-between">
          Theme
          <ThemeController />
        </a>
      </li>
      <li>
        <Link href={ROUTES.PAGES.AUTH.PATH}>Logout</Link>
      </li>
    </ul>
  )
}
