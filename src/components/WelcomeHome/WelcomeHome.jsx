import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectorIsAuthorized } from "../../redux/auth/selectors";
import { openLoginModal } from "../../redux/auth/slice";
import style from "./WelcomeHome.module.css";

export default function WelcomeHome() {
  const isAuthorized = useSelector(selectorIsAuthorized);
  const dispatch = useDispatch();

  return (
    <div className={style.containerWelcomeHome}>
      <h1 className={style.title}>
        Unlock your potential with the best{" "}
        <span className={style.language}>language</span> tutors
      </h1>
      <p className={style.text}>
        Embark on an Exciting Language Journey with Expert Language Tutors:
        Elevate your language proficiency to new heights by connecting with
        highly qualified and experienced tutors.
      </p>
      {!isAuthorized ? (
        <button
          type="button"
          className={style.button}
          onClick={() => dispatch(openLoginModal(true))}>
          Get started
        </button>
      ) : (
        <Link className={style.buttonViewTeachers} to="/teachers">
          View the list of teachers
        </Link>
      )}
    </div>
  );
}
