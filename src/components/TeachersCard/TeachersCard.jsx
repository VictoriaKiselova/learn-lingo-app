import { nanoid } from "nanoid";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TeachersCardHeader from "../TeacherCardHeader/TeacherCardHeader";
import { database } from "../../firebase";
import { ref, onValue } from "firebase/database";
import { selectorTeachersList } from "../../redux/teachers/selectors";
import { getTeachersList } from "../../redux/teachers/slice";
import style from "./TeachersCard.module.css";

export default function TeachersCard() {
  const teacherList = useSelector(selectorTeachersList);
  const dispatch = useDispatch();

  useEffect(() => {
    const postsRef = ref(database);
    const unsubscribe = onValue(postsRef, snapshot => {
      const data = snapshot.val();

      if (data) {
        const postsArray = Object.entries(data).map(([key, value]) => ({
          id: key,
          ...value,
        }));
        dispatch(getTeachersList(postsArray));
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return (
    <ul className={style.teacherCardContainer}>
      {teacherList.map(elem => (
        <li key={nanoid()} className={style.teacherCardItem}>
          <div className={style.avatarBox}>
            <img src={elem.avatar_url} alt="avatar" className={style.avatar} />
          </div>
          <div>
            <TeachersCardHeader teacherItem={elem} />
            <div>
              <ul className={style.teacherInfo}>
                <li className={style.teacherInfoItem}>
                  Speaks:{" "}
                  <span className={style.teacherInfoValue}>
                    {elem.languages.map(lang => (
                      <p key={nanoid()}>{lang}</p>
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
                    {" "}
                    {elem.conditions.map(item => (
                      <p key={nanoid()}>{item}</p>
                    ))}
                  </span>
                </li>
              </ul>
              <button type="button" className={style.button}>
                Read more
              </button>
            </div>
            <div>
              <ul className={style.levelContainer}>
                {elem.levels.map(level => (
                  <li key={nanoid()} className={style.levelItem}>
                    {level}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
