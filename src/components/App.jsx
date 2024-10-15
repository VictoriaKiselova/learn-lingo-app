import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Teachers from "../pages/Teachers/Teachers";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import style from "./App.module.css";

export default function App() {
  return (
    <div className={style.containerApp}>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/teachers" element={<PrivateRoute element={Teachers} />} />
      </Routes>
    </div>
  );
}
