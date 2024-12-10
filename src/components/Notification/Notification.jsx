import { Store } from "react-notifications-component";
import style from "./Notification.module.css";

export const showCustomNotification = ({ textNotification }) => {
  Store.addNotification({
    id: `notification-${Date.now()}`,
    content: <div className={style.customNotification}>{textNotification}</div>,
    type: "default",
    insert: "top",
    container: "bottom-center",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 1100,
      showIcon: true,
    },
  });
};
