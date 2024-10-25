import WelcomeHome from "../../components/WelcomeHome/WelcomeHome";
import HomeImg from "../../components/HomeImg/HomeImg";
import Advantages from "../../components/Advantages/Advantages";
import style from "./Home.module.css";

export default function Home() {
  return (
    <div className={style.HomelayoutContainer}>
      <div className={style.container}>
        <WelcomeHome />
        <HomeImg />
      </div>
      <Advantages />
    </div>
  );
}
