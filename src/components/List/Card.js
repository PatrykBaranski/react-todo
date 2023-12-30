import styles from "./Card.module.scss";

function Card({ children, id, isFavorite }) {
  return (
    <li className={styles.card} id={id}>
      {children}
      <button className={styles.favoriteButton}>
        <i
          className={
            isFavorite ? "fa fa-solid fa-star" : " fa fa-regular fa-star"
          }
        ></i>
      </button>
    </li>
  );
}

export default Card;
