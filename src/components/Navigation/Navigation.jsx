import { IoIosClose } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectorIsAuthorized } from "../../redux/auth/selectors";
import style from "./Navigation.module.css";

export default function Navigation({ setIsMenuOpen }) {
  const isAuthorized = useSelector(selectorIsAuthorized);

  return (
    <nav className={style.navContainer}>
      <button
        type="button"
        className={style.buttonClose}
        onClick={() => setIsMenuOpen(false)}>
        <IoIosClose className={style.iconClose} />
      </button>
      <NavLink
        onClick={() => setIsMenuOpen(false)}
        className={({ isActive }) =>
          isActive ? `${style.navHomeLink} ${style.active}` : style.navHomeLink
        }
        to="/">
        Home
      </NavLink>
      <NavLink
        onClick={() => setIsMenuOpen(false)}
        className={({ isActive }) =>
          isActive ? `${style.navHomeLink} ${style.active}` : style.navHomeLink
        }
        to="/teachers">
        Teachers
      </NavLink>
      {isAuthorized && (
        <NavLink
          onClick={() => setIsMenuOpen(false)}
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
