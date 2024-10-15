import SignOut from "../../components/SignOut/SignOut";
import Filter from "../../components/Filter/Filter";
import TeachersCard from "../../components/TeachersCard/TeachersCard";
import Logo from "../../components/Logo/Logo";
import style from "./Teachers.module.css";

export default function Teachers() {
  return (
    <div className={style.teacherContainer}>
      <div className={style.logoContainer}>
        <Logo />
        <SignOut />
      </div>
      <div className={style.teacherContent}>
        <div className={style.filter}>
          {" "}
          <Filter />
        </div>
        <TeachersCard />
      </div>
      <button type="button" className={style.buttonMore}>
        Load more
      </button>
    </div>
  );
}
