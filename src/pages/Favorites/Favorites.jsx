import { useSelector } from "react-redux";
import { selectorFavorites } from "../../redux/favorites/selectors";
import Teachers from "../Teachers/Teachers";
import style from "./Favorites.module.css";

export default function Favorites() {
  const favorites = useSelector(selectorFavorites);

  return (
    <>
      {favorites && favorites.length > 0 ? (
        <Teachers />
      ) : (
        <div className={style.favoritesText}>
          You haven&apos;t added anything to your favorites yet.
        </div>
      )}
    </>
  );
}
