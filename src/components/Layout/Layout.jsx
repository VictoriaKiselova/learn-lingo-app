import { Suspense } from "react";
import Header from "../Header/Header";
import style from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={style.layoutContainer}>
      <Header />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
}
