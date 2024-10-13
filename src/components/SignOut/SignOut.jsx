import { getAuth, signOut } from "firebase/auth";
import Icon from "../Icon/Icon";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectorIsAuthorized } from "../../redux/auth/selectors";
import { loginUser } from "../../redux/auth/slice";
import style from "./SignOut.module.css";

export default function SignOut() {
  const navigate = useNavigate();
  const isAuthorized = useSelector(selectorIsAuthorized);
  const dispatch = useDispatch();

  function signLogout() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        dispatch(
          loginUser({
            isAuthorized: false,
          })
        );
        navigate("/");
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <button onClick={signLogout} className={style.singOut}>
      <Icon
        id={"icon-log-in-01"}
        width="20px"
        height="20px"
        className={style.icon}
      />
      Sing Out
    </button>
  );
}
