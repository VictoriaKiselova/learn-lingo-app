import style from "./WelcomeHome.module.css";

export default function WelcomeHome() {
  return (
    <div className={style.containerWelcomeHome}>
      <h1 className={style.title}>
        Unlock your potential with the best {' '}
        <span className={style.language}>language</span> tutors
      </h1>
      <p className={style.text}>
        Embark on an Exciting Language Journey with Expert Language Tutors:
        Elevate your language proficiency to new heights by connecting with
        highly qualified and experienced tutors.
      </p>
      <button type="button" className={style.button}>
        Get started
      </button>
    </div>
  );
}
