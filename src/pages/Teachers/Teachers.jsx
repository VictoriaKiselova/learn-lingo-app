import { useState } from "react";
import { selectorModalBooking } from "../../redux/favorites/selectors";
import { useSelector } from "react-redux";
import TrialLessonForm from "../../components/TrialLessonForm/TrialLessonForm";
import Filter from "../../components/Filter/Filter";
import TeachersCard from "../../components/TeachersCard/TeachersCard";
import style from "./Teachers.module.css";

export default function Teachers() {
  const modalBookingForm = useSelector(selectorModalBooking);
  const [imageTeacher, setImageTeacher] = useState("");
  const [teacherName, setTeacherName] = useState({});

  return (
    <div className={style.teacherContainer}>
      {modalBookingForm && (
        <TrialLessonForm
          imageTeacher={imageTeacher}
          setImageTeacher={setImageTeacher}
          teacherName={teacherName}
        />
      )}
      <div className={style.teacherContent}>
        <div className={style.filter}>
          {" "}
          <Filter />
        </div>
        <TeachersCard
          imageTeacher={imageTeacher}
          setImageTeacher={setImageTeacher}
          teacherName={teacherName}
          setTeacherName={setTeacherName}
        />
      </div>
    </div>
  );
}
