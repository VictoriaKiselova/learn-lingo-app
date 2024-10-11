import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import style from "./Header.module.css";

export default function Header() {
  return (
    <div>
      <Logo />
      <Navigation />
    </div>
  );
}
