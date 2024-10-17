import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Teachers from "../pages/Teachers/Teachers";
import Description from "../components/Description/Description";
import style from "./App.module.css";

export default function App() {
  return (
    <div className={style.containerApp}>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/teachers" element={<Teachers />}>
          <Route path="description/:id" element={<Description />} />
        </Route>
      </Routes>
    </div>
  );
}
