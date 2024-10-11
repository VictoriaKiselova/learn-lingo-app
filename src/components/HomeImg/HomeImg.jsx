import style from "./HomeImg.module.css";
import img from '../../Images/block.jpg'

export default function HomeImg() {
  return (
    // <div className={style.container}>
      <img
        src={img}
        alt="Logo"
        className={style.image}
      />
    // </div>
  );
}
