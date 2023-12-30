import { useSelector } from "react-redux";
import PageTitle from "./PageTitle/PageTitle";
import { getFavoriteCards } from "../redux/store";
import Card from "./List/Card";
import styles from "./Favorite.module.scss";

function Favorite() {
  const favoriteCards = getFavoriteCards(useSelector((state) => state));
  console.log(favoriteCards);

  return (
    <div>
      <PageTitle>Favorite</PageTitle>
      <ul className={styles["favorite-cards"]}>
        {favoriteCards.map(({ id, title, isFavorite }) => (
          <Card key={id} id={id} isFavorite={isFavorite}>
            {title}
          </Card>
        ))}
      </ul>
    </div>
  );
}

export default Favorite;
