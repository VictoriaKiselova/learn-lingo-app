import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Teachers from '../pages/Teachers/Teachers'
import style from "./App.module.css";

export default function App() {
  return (
    <div className={style.containerApp}>
      <Routes>
        <Route path="/" element={<Layout />} />
         <Route path="/teachers" element={<Teachers />} /> 
        {/* <Route path="/catalog/:id" element={<DetailsPage />}>
          <Route path="features" element={<Features />} />
          <Route path="reviews" element={<Reviews />} />
        </Route> } */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </div>
  );
}