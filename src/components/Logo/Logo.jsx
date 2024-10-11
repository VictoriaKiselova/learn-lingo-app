import style from "./Logo.module.css";
import Icon from "../Icon/Icon";

export default function Logo() {
  return (
    <div className={style.logoContainer}>
      <Icon
        id={"icon-ukraine"}
        width="28px"
        height="28px"
        className={style.icon}
      />
      <p className={style.logo}>LearnLingo</p>
    </div>
  );
}
