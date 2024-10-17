import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { database } from "../../firebase";
import { ref, onValue } from "firebase/database";
import Icon from "../Icon/Icon";
import style from "./Description.module.css";

export default function Description() {
  const [teacherById, setTeacherById] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const dbRef = ref(database, `${id}`);
    onValue(dbRef, snapshot => {
      const data = snapshot.val();
      setTeacherById(data);
    });
  }, [id]);

  return (
    <div className={style.descriptionContainer}>
      {teacherById && teacherById.reviews ? (
        <ul className={style.reviewsList}>
          <li className={style.reviewsItem}>
            <p className={style.description}>{teacherById.experience}</p>

            {teacherById.reviews.map(elem => (
              <div key={nanoid()} className={style.review}>
                <h3 className={style.reviewerName}>{elem.reviewer_name}</h3>
                <p className={style.rating}>
                  <Icon
                    id={"icon-star"}
                    width="16px"
                    height="16px"
                    className={style.iconStar}
                  />
                  {elem.reviewer_rating}.0
                </p>
                <p className={style.comment}>{elem.comment}</p>
              </div>
            ))}
          </li>
        </ul>
      ) : null}
    </div>
  );
}
