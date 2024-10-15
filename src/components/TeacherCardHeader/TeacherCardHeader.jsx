import Icon from "../Icon/Icon";
import style from "./TeachersCardHeader.module.css";

export default function TeachersCardHeader({ teacherItem }) {
  return (
    <ul className={style.container}>
      <li key={teacherItem.id} className={style.cardHeaderContainer}>
        <div>
          <p className={style.lang}>Languages</p>
          <p className={style.name}>
            {teacherItem.name} {teacherItem.surname}
          </p>
        </div>
        <ul className={style.details}>
          <li className={style.detailsItem}>
            {" "}
            <Icon
              id={"icon-book-open-01"}
              width="16px"
              height="16px"
              className={style.icon}
            />
            Lessons online
          </li>
          <li className={style.detailsItem}>
            Lessons done: {teacherItem.lessons_done}
          </li>
          <li className={style.detailsItem}>
            {" "}
            <Icon
              id={"icon-star"}
              width="16px"
              height="16px"
              className={style.iconStar}
            />
            Rating: {teacherItem.rating}
          </li>
          <li className={style.detailsItem}>
            Price / 1 hour:{" "}
            <span className={style.greenText}>
              {teacherItem.price_per_hour}$
            </span>
          </li>
        </ul>
        <Icon
          id={"icon-heart"}
          width="26px"
          height="26px"
          className={style.iconHeart}
        />
      </li>
    </ul>
  );
}
