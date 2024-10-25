import { Link, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { database } from "../../firebase";
import { ref, onValue } from "firebase/database";
import { openModalBooking } from "../../redux/favorites/slice";
import { selectorFavorites } from "../../redux/favorites/selectors";
import Loader from "../Loader/Loader";
import TeachersCardHeader from "../TeacherCardHeader/TeacherCardHeader";
import style from "./TeachersCard.module.css";

export default function TeachersCard({ setImageTeacher, setTeacherName }) {
  const [isData, setIsData] = useState([]);
  const [openItemId, setOpenItemId] = useState(null);
  const favorites = useSelector(selectorFavorites);
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const dbRef = ref(database);
    const unsubscribe = onValue(dbRef, snapshot => {
      const data = snapshot.val();

      if (location.pathname === "/favorites") {
        setIsData(favorites);
      } else {
        setIsData(data);
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  const handleItemClick = (id, avatar, name, surname) => {
    setOpenItemId(prevId => (prevId === id ? null : id));
    setImageTeacher(avatar);
    setTeacherName({ name, surname });
  };

  const handleIOpenModalBooking = () => {
    dispatch(openModalBooking());
  };

  return (
    <ul className={style.teacherCardContainer}>
      {isData.length > 0 ? (
        isData.map(elem => (
          <li key={elem.id} className={style.teacherCardItem}>
            <div className={style.avatarBox}>
              <img
                src={elem.avatar_url}
                alt="avatar"
                className={style.avatar}
              />
            </div>

            <div>
              <TeachersCardHeader teacherItem={elem} />
              <div className={style.infoTeacherContainer}>
                <ul className={style.teacherInfo}>
                  <li className={style.teacherInfoItem}>
                    Speaks:{" "}
                    <span className={style.teacherInfoValue}>
                      {elem.languages.map((lang, index) => (
                        <p key={index}>{lang}</p>
                      ))}
                    </span>
                  </li>
                  <li className={style.teacherInfoItem}>
                    Lesson Info:{" "}
                    <span className={style.teacherInfoValue}>
                      {elem.lesson_info}
                    </span>
                  </li>
                  <li className={style.teacherInfoItem}>
                    Conditions:{" "}
                    <span className={style.teacherInfoValue}>
                      {elem.conditions.map((item, index) => (
                        <p key={index}>{item}</p>
                      ))}
                    </span>
                  </li>
                </ul>
                <Link
                  to={`description/${elem.id}`}
                  className={style.button}
                  onClick={() =>
                    handleItemClick(
                      elem.id,
                      elem.avatar_url,
                      elem.name,
                      elem.surname
                    )
                  }>
                  {openItemId === elem.id ? "Collapse" : "Read more"}
                </Link>
                {openItemId === elem.id && <Outlet />}
              </div>

              <ul className={style.levelContainer}>
                {elem.levels.map((level, index) => (
                  <li key={index} className={style.levelItem}>
                    {level}
                  </li>
                ))}
              </ul>

              {openItemId === elem.id && (
                <button
                  type="button"
                  className={style.buttonTrial}
                  onClick={handleIOpenModalBooking}>
                  Book trial lesson
                </button>
              )}
            </div>
          </li>
        ))
      ) : (
        <Loader />
      )}
    </ul>
  );
}
