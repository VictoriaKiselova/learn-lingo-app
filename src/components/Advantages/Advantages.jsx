import style from "./Advantages.module.css";

export default function Advantages() {
  return (
    <div className={style.advantagesContainer}>
      <ul className={style.advantagesList}>
        <li className={style.advantagesItem}>
          <p className={style.quantity}>32,000 +</p>
          <p className={style.advantages}>Experienced tutors</p>
        </li>
        <li className={style.advantagesItem}>
          <p className={style.quantity}>300,000 +</p>
          <p className={style.advantages}>5-star tutor reviews</p>
        </li>
        <li className={style.advantagesItem}>
          <p className={style.quantity}>120 +</p>
          <p className={style.advantages}>Subjects taught</p>
        </li>
        <li className={style.advantagesItem}>
          <p className={style.quantity}>200 +</p>
          <p className={style.advantages}>Tutor nationalities</p>
        </li>
      </ul>
    </div>
  );
}
