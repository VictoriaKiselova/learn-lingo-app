import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import AuthModal from "../AuthModal/AuthModal";
import style from "./Header.module.css";

export default function Header() {
  return (
    <div className={style.headerContainer}>
      <Logo />
      <Navigation />
      <AuthModal />
    </div>
  );
}
