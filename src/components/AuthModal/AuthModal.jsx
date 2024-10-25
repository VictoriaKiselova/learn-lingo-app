import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectorIsLoginModalOpen } from "../../redux/auth/selectors";
import { openLoginModal } from "../../redux/auth/slice";
import Modal from "react-modal";
import LogIn from "../LogIn/LogIn";
import Registration from "../Registration/Registration";
import Icon from "../Icon/Icon";
import style from "./AuthModal.module.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    maxWidth: "39%",
    minWidth: "280px",
    transform: "translate(-50%, -50%)",
    borderRadius: "30px",
    border: "none",
    padding: "4.5%",
    position: "relative",
    backgroundColor: "#fff",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
};
Modal.setAppElement("#root");

export default function AuthModal() {
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);
  const isLoginModalOpen = useSelector(selectorIsLoginModalOpen);
  const dispatch = useDispatch();

  function handleOpenLoginModal() {
    dispatch(openLoginModal(true));
  }

  function closeLoginModal() {
    dispatch(openLoginModal(false));
  }

  function openRegistrationModal() {
    setIsRegistrationModalOpen(true);
  }

  function closeRegistrationModal() {
    setIsRegistrationModalOpen(false);
  }

  return (
    <div className={style.authContainer}>
      <button onClick={handleOpenLoginModal} className={style.login}>
        <Icon
          id={"icon-log-in-01"}
          width="20px"
          height="20px"
          className={style.icon}
        />
        Log In
      </button>
      <button onClick={openRegistrationModal} className={style.registration}>
        Registration
      </button>

      <Modal
        isOpen={isLoginModalOpen}
        style={customStyles}
        contentLabel="Login Modal">
        <LogIn closeLoginModal={closeLoginModal} />
      </Modal>

      <Modal
        isOpen={isRegistrationModalOpen}
        style={customStyles}
        contentLabel="Registration Modal">
        <Registration closeRegistrationModal={closeRegistrationModal} />{" "}
      </Modal>
    </div>
  );
}
