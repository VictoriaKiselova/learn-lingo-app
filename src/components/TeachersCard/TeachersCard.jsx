import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { database } from "../../firebase";
import { ref, onValue } from "firebase/database";
import TeachersCardHeader from "../TeacherCardHeader/TeacherCardHeader";
import Loader from "../Loader/Loader";
import style from "./TeachersCard.module.css";

export default function TeachersCard() {
  const [isData, setIsData] = useState([]);

  useEffect(() => {
    const dbRef = ref(database);
    const unsubscribe = onValue(dbRef, snapshot => {
      const data = snapshot.val();
      setIsData(data || []);
    });

    return () => unsubscribe();
  }, []);

  return (
    <ul className={style.teacherCardContainer}>
      {isData.length > 0 ? (
        isData.map(elem => (
          <li key={nanoid()} className={style.teacherCardItem}>
            <div className={style.avatarBox}>
              <img
                src={elem.avatar_url}
                alt="avatar"
                className={style.avatar}
              />
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
        ))
      ) : (
        <p>
          <Loader />
        </p>
      )}
    </ul>
  );
}
