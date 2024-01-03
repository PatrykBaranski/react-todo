import { useDispatch, useSelector } from "react-redux";
import styles from "./Card.module.scss";
import {
  toggleFavoriteCard,
  isFavoriteCard,
  deleteCard,
} from "../../redux/cardsReducer";
import { getCardById } from "../../redux/cardsReducer";
import { useState } from "react";

function Card({ children, id }) {
  const dispatch = useDispatch();

  const card = getCardById(
    useSelector((state) => state),
    id
  );
  const [isFavorite, setIsFavorite] = useState(isFavoriteCard(card));

  const favoriteCardClickHandler = () => {
    toggleFavoriteCard(card);
    setIsFavorite(isFavoriteCard(card));
  };

  const deleteCardClickHandler = () => {
    dispatch(deleteCard(card));
  };

  return (
    <li className={styles.card} id={id}>
      {children}
      <div>
        <button
          onClick={favoriteCardClickHandler}
          className={styles.cardButton}
        >
          <i className={isFavorite ? "fa fa-star" : " fa fa-star-o"}></i>
        </button>
        <button onClick={deleteCardClickHandler} className={styles.cardButton}>
          <i className="fa fa-trash"></i>
        </button>
      </div>
    </li>
  );
}

export default Card;
