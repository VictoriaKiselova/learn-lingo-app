import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectorIsAuthorized } from "../../redux/auth/selectors";
import style from "./Navigation.module.css";

export default function Navigation() {
  const isAuthorized = useSelector(selectorIsAuthorized);

  return (
    <nav className={style.navContainer}>
      <NavLink
        className={({ isActive }) =>
          isActive ? `${style.navHomeLink} ${style.active}` : style.navHomeLink
        }
        to="/">
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? `${style.navHomeLink} ${style.active}` : style.navHomeLink
        }
        to="/teachers">
        Teachers
      </NavLink>
      {isAuthorized && (
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${style.navHomeLink} ${style.active}`
              : style.navHomeLink
          }
          to="/favorites">
          Favorites
        </NavLink>
      )}
    </nav>
  );
}
