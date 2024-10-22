import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import { auth } from "../../firebase";
import {
  setPersistence,
  createUserWithEmailAndPassword,
  browserSessionPersistence,
} from "firebase/auth";
import { registrUser } from "../../redux/auth/slice";
import * as Yup from "yup";
import Icon from "../Icon/Icon";
import style from "../Registration/Registration.module.css";

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Min 2 chars!")
    .max(50, "Max 50 chars!")
    .required("is required!"),
  email: Yup.string().email().required("is required!"),
  password: Yup.string().min(6, "Min 6 chars!").required("is required!"),
});
export default function Registration({ closeRegistrationModal }) {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const nameId = nanoid();
  const emailId = nanoid();
  const passwordId = nanoid();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleVisiblePassword = () => {
    setIsVisiblePassword(prevState => !prevState);
  };

  const handleSubmitRegister = async (values, { setFieldError, resetForm }) => {
    setPersistence(auth, browserSessionPersistence);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      if (userCredential.user) {
        dispatch(
          registrUser({
            isAuthorized: true,
            name: values.name,
            email: values.email,
          })
        );
      }

      resetForm();
      navigate("/teachers");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(`Error: ${errorCode}, Message: ${errorMessage}`);

      if (errorCode === "auth/email-already-in-use") {
        setFieldError("email", "An account with this email already exists.");
      } else if (errorCode === "auth/weak-password") {
        setFieldError("password", "The password is too weak.");
      } else {
        setFieldError("email", errorMessage);
      }
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={closeRegistrationModal}
        className={style.closeButton}>
        <Icon
          id={"icon-x"}
          width="32px"
          height="32px"
          className={style.iconClose}
        />
      </button>
      <p className={style.title}>Registration</p>
      <p className={style.loginText}>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information
      </p>

      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={contactSchema}
        onSubmit={handleSubmitRegister}>
        <Form className={style.form}>
          <label htmlFor={nameId}>
            <Field
              name="name"
              id={nameId}
              className={style.input}
              placeholder="Name"
            />
            <ErrorMessage
              name="name"
              className={style.error}
              component="span"
            />
          </label>

          <label htmlFor={emailId}>
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

          <label htmlFor={passwordId}>
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
            Sign Up
          </button>
        </Form>
      </Formik>
    </>
  );
}
