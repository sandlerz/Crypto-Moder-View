import { NavLink, Outlet } from 'react-router-dom'
import {
  high,
  low,
  main,
  news,
  save,
  logoIcon,
} from '../Assets/Images/NavIcons'

export default function Navbar() {
  return (
    <>
      <div>
        <div>
          <img src={logoIcon} alt="" />
        </div>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'IconNav active' : 'IconNav'
              }
            >
              <img src={main} alt="" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="high"
              className={({ isActive }) =>
                isActive ? 'IconNav active' : 'IconNav'
              }
            >
              <img src={high} alt="" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="low"
              className={({ isActive }) =>
                isActive ? 'IconNav active' : 'IconNav'
              }
            >
              <img src={low} alt="" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="save"
              className={({ isActive }) =>
                isActive ? 'IconNav active' : 'IconNav'
              }
            >
              <img src={news} alt="" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="news"
              className={({ isActive }) =>
                isActive ? 'IconNav active' : 'IconNav'
              }
            >
              <img src={save} alt="" />
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  )
}
