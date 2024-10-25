import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOutUser } from "../../redux/auth/slice";
import Icon from "../Icon/Icon";
import style from "./SignOut.module.css";

export default function SignOut() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function signLogout() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        dispatch(logOutUser());
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
