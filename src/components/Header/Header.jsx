import { IoMdMenu } from "react-icons/io";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectorIsAuthorized } from "../../redux/auth/selectors";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import AuthModal from "../AuthModal/AuthModal";
import SignOut from "../SignOut/SignOut";
import style from "./Header.module.css";

export default function Header() {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isAuthorized = useSelector(selectorIsAuthorized);

  useEffect(() => {
    const handleResize = () => setIsMobileView(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    if (!isMobileView) {
      setIsMenuOpen(false);
    }
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileView]);

  return (
    <div className={style.headerContainer}>
      {isMobileView ? null : (
        <>
          <Logo />
          <Navigation />
        </>
      )}
      {isMobileView && (
        <div className={style.headerBox}>
          <button
            className={style.buttonMenu}
            onClick={() => setIsMenuOpen(true)}>
            <IoMdMenu className={style.headerMenu} />
          </button>
          <Logo />
        </div>
      )}
      {!isAuthorized ? <AuthModal /> : <SignOut />}
      {isMenuOpen && (
        <div className={style.modalMenu}>
          <Navigation setIsMenuOpen={setIsMenuOpen} />
        </div>
      )}
    </div>
  );
}
