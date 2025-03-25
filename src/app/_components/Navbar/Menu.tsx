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
        <a className="justify-between">
          Profile
          <span className="badge">New</span>
        </a>
      </li>
      <li>
        <a>Settings</a>
      </li>
      <li>
        <a>Logout</a>
      </li>
    </ul>
  )
}
