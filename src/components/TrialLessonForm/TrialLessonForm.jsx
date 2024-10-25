import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { selectorModalBooking } from "../../redux/favorites/selectors";
import { closeModalBooking } from "../../redux/favorites/slice";
import { useDispatch, useSelector } from "react-redux";
import Icon from "../Icon/Icon";
import style from "./TrialLessonForm.module.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "30px",
    border: "none",
    position: "relative",
    backgroundColor: "#fff",
    outline: "none",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
};

export default function TrialLessonForm({ imageTeacher, teacherName }) {
  const modalBookingForm = useSelector(selectorModalBooking);
  const dispatch = useDispatch();

  function handleICloseModalBooking() {
    dispatch(closeModalBooking());
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      reason: "Career and business",
    },
  });

  const onSubmit = data => {
    reset();
    handleICloseModalBooking();
  };

  return (
    <Modal
      isOpen={modalBookingForm}
      onRequestClose={handleICloseModalBooking}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      style={customStyles}
      className={style.modal}>
      <button onClick={handleICloseModalBooking} className={style.buttonClose}>
        <Icon
          id={"icon-x"}
          width="20px"
          height="20px"
          className={style.iconClose}
        />
      </button>
      <div className={style.bookTrialWrapper}>
        <h3 className={style.titleForm}>Book trial lesson</h3>
        <p className={style.textForm}>
          Our experienced tutor will assess your current language level, discuss
          your learning goals, and tailor the lesson to your specific needs.
        </p>
        <div className={style.teacherWrapper}>
          <img src={imageTeacher} alt="avatar" className={style.avatar} />
          <div>
            {" "}
            <p className={style.yourTeacher}>Your teacher</p>
            <p className={style.nameTeacher}>
              {teacherName.name} {teacherName.surname}
            </p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
        <p className={style.causeTitle}>
          What is your main reason for learning English?
        </p>
        <div className={style.inputWrapper}>
          <label className={style.inputCause}>
            <input
              type="radio"
              name="reason"
              value="Career and business"
              {...register("reason", { required: "Please select an option" })}
            />
            Career and business
          </label>
          <label className={style.inputCause}>
            <input
              type="radio"
              name="reason"
              value="Lesson for kids"
              {...register("reason", { required: "Please select an option" })}
            />
            Lesson for kids
          </label>
          <label className={style.inputCause}>
            <input
              type="radio"
              name="reason"
              value="Living abroad"
              {...register("reason", { required: "Please select an option" })}
            />
            Living abroad
          </label>
          <label className={style.inputCause}>
            <input
              type="radio"
              name="reason"
              value="Exams and coursework"
              {...register("reason", { required: "Please select an option" })}
            />
            Exams and coursework
          </label>
          <label className={style.inputCause}>
            <input
              type="radio"
              name="reason"
              value="Culture, travel or hobby"
              {...register("reason", { required: "Please select an option" })}
            />
            Culture, travel or hobby
          </label>
        </div>

        <div className={style.inputTextWrapper}>
          <input
            {...register("fullName", { required: true })}
            type="text"
            placeholder="Full Name"
            className={style.inputText}
          />
          {errors.fullName && (
            <p className={style.error}>Full Name is required.</p>
          )}

          <input
            {...register("email", {
              required: true,
              pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            })}
            type="text"
            placeholder="Email"
            className={style.inputText}
          />
          {errors.email && (
            <p className={style.error}>
              Email is required and should be valid.
            </p>
          )}

          <input
            {...register("phone", {
              required: true,
              pattern: /^\+?[0-9\s()-]{7,15}$/,
            })}
            type="text"
            placeholder="Phone number"
            className={style.inputText}
          />
          {errors.phone && (
            <p className={style.error}>
              Phone number is required and should be valid.
            </p>
          )}
        </div>

        <button type="submit" className={style.buttonBook}>
          Book
        </button>
      </form>
    </Modal>
  );
}
