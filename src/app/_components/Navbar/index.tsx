import { ROUTES } from '@/app/_config'
import { fetchStrapiQuery } from '@/app/_lib/strapi'
import { IGlobal } from '@/app/_models'

import { Avatar, ShoppingCart } from '@/app/_components'
import Link from 'next/link'
import Menu from './Menu'

let title: string = 'Title Bar'
const NavbarComponent = () => {
  fetchStrapiQuery<IGlobal>(ROUTES.STRAPRI.GLOBAL()).then(
    ({ data: { siteName } }) => {
      title = siteName
    },
  )
  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 ">
      <div className="flex-1">
        <Link href={ROUTES.PAGES.HOME.PATH} className="btn btn-ghost text-xl">
          {title}
        </Link>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end mr-2">
          <ShoppingCart value={0} />
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
          >
            <div className="card-body">
              <span className="text-lg font-bold">9999 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end ml-2">
          <Avatar />
          <Menu />
        </div>
      </div>
    </div>
  )
}
export default NavbarComponent
