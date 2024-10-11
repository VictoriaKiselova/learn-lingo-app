import WelcomeHome from "../../components/WelcomeHome/WelcomeHome";
import HomeImg from "../../components/HomeImg/HomeImg";
import style from "./Home.module.css";

export default function Home() {
  return (
    <div className={style.container}>
      <WelcomeHome />
      <HomeImg />
    </div>
  );
}
