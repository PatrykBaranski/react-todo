import styles from "./Card.module.scss";
function Card({ children, id }) {
  return (
    <li className={styles.card} id={id}>
      {children}
    </li>
  );
}

export default Card;
