import { NavLink, Outlet } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'IconNav active' : 'IconNav'
            }
          >
            <img src={''} />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="high"
            className={({ isActive }) =>
              isActive ? 'IconNav active' : 'IconNav'
            }
          >
            <img src={''} />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="low"
            className={({ isActive }) =>
              isActive ? 'IconNav active' : 'IconNav'
            }
          >
            <img src={''} />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="save"
            className={({ isActive }) =>
              isActive ? 'IconNav active' : 'IconNav'
            }
          >
            <img src={''} />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="news"
            className={({ isActive }) =>
              isActive ? 'IconNav active' : 'IconNav'
            }
          >
            <img src={''} />
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  )
}
