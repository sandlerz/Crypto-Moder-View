import { NavLink, Outlet } from 'react-router-dom'
import {
  high,
  low,
  main,
  news,
  save,
  logoIcon,
  settings,
} from '../Assets/Images/NavIcons'

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar__logo">
          <img src={logoIcon} alt="" />
        </div>
        <ul className="navbar__navLink">
          <li className="navbar__navLink__item">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <img src={main} alt="" />
            </NavLink>
          </li>
          <li className="navbar__navLink__item">
            <NavLink
              to="high"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <img src={high} alt="" />
            </NavLink>
          </li>
          <li className="navbar__navLink__item">
            <NavLink
              to="low"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <img src={low} alt="" />
            </NavLink>
          </li>
          <li className="navbar__navLink__item">
            <NavLink
              to="save"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <img src={news} alt="" />
            </NavLink>
          </li>
          <li className="navbar__navLink__item">
            <NavLink
              to="news"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <img src={save} alt="" />
            </NavLink>
          </li>
        </ul>
        <div className="navbar__settings">
          <img src={settings} alt="" />
        </div>
      </div>
      <Outlet />
    </>
  )
}
