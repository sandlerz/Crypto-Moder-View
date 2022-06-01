import { NavLink, Outlet } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/"></NavLink>
        </li>
        <li>
          <NavLink to="high"></NavLink>
        </li>
        <li>
          <NavLink to="low"></NavLink>
        </li>
        <li>
          <NavLink to="save"></NavLink>
        </li>
        <li>
          <NavLink to="news"></NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  )
}
