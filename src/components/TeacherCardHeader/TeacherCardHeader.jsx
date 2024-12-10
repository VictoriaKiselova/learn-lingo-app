import { useSelector, useDispatch } from "react-redux";
import { selectorIsAuthorized } from "../../redux/auth/selectors";
import { addFavorites, removeFavorites } from "../../redux/favorites/slice";
import { selectorFavorites } from "../../redux/favorites/selectors";
import { showCustomNotification } from "../Notification/Notification";
import Icon from "../Icon/Icon";
import style from "./TeachersCardHeader.module.css";

export default function TeachersCardHeader({ teacherItem }) {
  const dispatch = useDispatch();
  const isAuthorized = useSelector(selectorIsAuthorized);
  const isFavorites = useSelector(selectorFavorites);
  const isFavorite = isFavorites.some(
    favorite => favorite.id === teacherItem.id
  );

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFavorites(teacherItem));
    } else {
      dispatch(addFavorites(teacherItem));
    }
  };

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

        <button
          type="button"
          className={style.buttonFavourite}
          onClick={() => {
            if (!isAuthorized) {
              showCustomNotification({
                textNotification: "Sign in to add to favorites",
              });
            } else {
              handleFavoriteClick();
              {
                !isFavorite
                  ? showCustomNotification({
                      textNotification: "Added to favorites",
                    })
                  : showCustomNotification({
                      textNotification: "Removed from favorites",
                    });
              }
            }
          }}>
          <Icon
            id={"icon-heart"}
            width="26px"
            height="26px"
            className={!isFavorite ? style.iconHeart : style.iconHeartFavourite}
          />
        </button>
      </li>
    </ul>
  );
}
