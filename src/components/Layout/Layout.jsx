import Home from "../../pages/Home/Home";
import Header from "../Header/Header";
import Advantages from "../Advantages/Advantages";
import style from "./Layout.module.css";

export default function Layout() {
  return (
    <div className={style.layoutContainer}>
      <Header />
      <Home />
      <Advantages />
    </div>
  );
}
