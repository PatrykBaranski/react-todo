import { useSelector } from "react-redux";
import styles from "./Card.module.scss";
import { toggleFavoriteCard, isFavoriteCard } from "../../redux/store";
import { useState } from "react";

function Card({ children, id }) {
  const cards = useSelector((state) => state.cards);
  const [isFavorite, setIsFavorite] = useState(isFavoriteCard(cards, id));

  return (
    <li className={styles.card} id={id}>
      {children}
      <button
        onClick={() => {
          toggleFavoriteCard(cards, id);
          setIsFavorite(isFavoriteCard(cards, id));
        }}
        className={styles.favoriteButton}
      >
        <i className={isFavorite ? "fa fa-star" : " fa fa-star-o"}></i>
      </button>
    </li>
  );
}

export default Card;
