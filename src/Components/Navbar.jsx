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
              className={({ isActive }) =>
                isActive ? 'isActive' : 'deactivated'
              }
            >
              <img className="grid" src={main} alt="" />
            </NavLink>
          </li>
          <li className="navbar__navLink__item">
            <NavLink
              to="bullishCoins"
              className={({ isActive }) =>
                isActive ? 'isActive' : 'deactivated'
              }
            >
              <img className="bullish" src={high} alt="" />
            </NavLink>
          </li>
          <li className="navbar__navLink__item">
            <NavLink
              to="bearishCoins"
              className={({ isActive }) =>
                isActive ? 'isActive' : 'deactivated'
              }
            >
              <img className="bearish" src={low} alt="" />
            </NavLink>
          </li>
          <li className="navbar__navLink__item">
            <NavLink
              to="news"
              className={({ isActive }) =>
                isActive ? 'isActive' : 'deactivated'
              }
            >
              <img className="news" src={news} alt="" />
            </NavLink>
          </li>
          <li className="navbar__navLink__item">
            <NavLink
              to="save"
              className={({ isActive }) =>
                isActive ? 'isActive' : 'deactivated'
              }
            >
              <img className="save" src={save} alt="" />
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
