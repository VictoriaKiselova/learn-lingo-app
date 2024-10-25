import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home/Home";
import Teachers from "../pages/Teachers/Teachers";
import Description from "../components/Description/Description";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { AnimatePresence } from "framer-motion";
import Favorites from "../pages/Favorites/Favorites";
import style from "./App.module.css";

export default function App() {
  return (
    <div className={style.containerApp}>
      <ReactNotifications />
      <Layout>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/teachers" element={<Teachers />}>
              <Route path="description/:id" element={<Description />} />
            </Route>
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </AnimatePresence>
      </Layout>
    </div>
  );
}
