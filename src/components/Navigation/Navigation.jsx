import { Link } from "react-router-dom";
import style from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav className={style.navContainer}>
      <Link className={style.navHomeLink} to="/">
        Home
      </Link>
      <Link className={style.navHomeLink} to="/teachers">
        Teachers
      </Link>
    </nav>
  );
}
