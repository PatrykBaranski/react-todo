import { useSelector } from "react-redux";
import styles from "./Card.module.scss";
import {
  toggleFavoriteCard,
  isFavoriteCard,
  getCardById,
} from "../../redux/store";
import { useState } from "react";

function Card({ children, id }) {
  const card = getCardById(
    useSelector((state) => state),
    id
  );
  const [isFavorite, setIsFavorite] = useState(isFavoriteCard(card));

  const favoriteCardClickHandler = () => {
    toggleFavoriteCard(card);
    setIsFavorite(isFavoriteCard(card));
  };

  return (
    <li className={styles.card} id={id}>
      {children}
      <button
        onClick={favoriteCardClickHandler}
        className={styles.favoriteButton}
      >
        <i className={isFavorite ? "fa fa-star" : " fa fa-star-o"}></i>
      </button>
    </li>
  );
}

export default Card;
