import { useSelector } from "react-redux";
import { selectorIsAuthorized } from "../../redux/auth/selectors";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import AuthModal from "../AuthModal/AuthModal";
import SignOut from "../SignOut/SignOut";
import style from "./Header.module.css";

export default function Header() {
  const isAuthorized = useSelector(selectorIsAuthorized);
  return (
    <div className={style.headerContainer}>
      <Logo />
      <Navigation />
      {!isAuthorized ? <AuthModal /> : <SignOut />}
    </div>
  );
}
