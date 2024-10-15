import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { openLoginModal } from "../../redux/auth/slice";
import { selectorIsAuthorized } from "../../redux/auth/selectors";

export default function PrivateRoute({ element: Element }) {
  const dispatch = useDispatch();
  const isAuthorized = useSelector(selectorIsAuthorized);
  if (!isAuthorized) {
    dispatch(openLoginModal(true));
    return <Navigate to="/" />;
  }
  return <Element />;
}
