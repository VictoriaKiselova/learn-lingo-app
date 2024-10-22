import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { auth } from "../../firebase";
import {
  setPersistence,
  signInWithEmailAndPassword,
  browserSessionPersistence,
} from "firebase/auth";
import { loginUser } from "../../redux/auth/slice";
import * as Yup from "yup";
import Icon from "../Icon/Icon";
import style from "./LogIn.module.css";

const contactSchema = Yup.object().shape({
  email: Yup.string().email().required("is required!"),
  password: Yup.string().min(6, "Min 6 chars!").required("is required!"),
});

export default function LogIn({ closeLoginModal }) {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const emailId = nanoid();
  const passwordId = nanoid();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleVisiblePassword = () => {
    setIsVisiblePassword(prevState => !prevState);
  };

  function handleSubmitLogin(actions, values) {
    setPersistence(auth, browserSessionPersistence);
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(userCredential => {
        dispatch(
          loginUser({
            isAuthorized: true,
          })
        );
        actions.resetForm();
        navigate("/teachers");
        closeLoginModal();
      })
      .catch(error => console.log(error));
  }

  return (
    <>
      <button
        type="button"
        onClick={closeLoginModal}
        className={style.closeButton}>
        <Icon
          id={"icon-x"}
          width="32px"
          height="32px"
          className={style.iconClose}
        />
      </button>
      <p className={style.title}>Log In</p>
      <p className={style.loginText}>
        Welcome back! Please enter your credentials to access your account and
        continue your search for an teacher.
      </p>

      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={contactSchema}
        onSubmit={(values, actions) => handleSubmitLogin(actions, values)}>
        <Form className={style.form}>
          <label htmlFor={nanoid()}>
            <Field
              name="email"
              id={emailId}
              className={style.input}
              placeholder="Email"
            />
            <ErrorMessage
              name="email"
              className={style.error}
              component="span"
            />
          </label>

          <label htmlFor={nanoid()}>
            <div className={style.passwordBox}>
              {" "}
              <button
                type="button"
                onClick={toggleVisiblePassword}
                className={style.passwordBut}>
                {!isVisiblePassword ? (
                  <Icon
                    id={"icon-eye"}
                    width="20px"
                    height="20px"
                    className={style.iconEye}
                  />
                ) : (
                  <Icon
                    id={"icon-eye-off"}
                    width="20px"
                    height="20px"
                    className={style.iconEyeClose}
                  />
                )}
              </button>
              <Field
                type={isVisiblePassword ? "text" : "password"}
                name="password"
                id={passwordId}
                className={style.input}
                placeholder="Password"
              />
            </div>

            <ErrorMessage
              name="password"
              className={style.error}
              component="span"
            />
          </label>

          <button type="submit" className={style.buttonRegistr}>
            Log In
          </button>
        </Form>
      </Formik>
    </>
  );
}
