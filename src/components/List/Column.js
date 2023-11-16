import Card from "./Card";

import styles from "./Column.module.scss";
function Column({ columnTitle, icon, cards }) {
  return (
    <article className={styles.column}>
      <h2 className={styles.title}>
        <span className={`${styles.icon} fa fa-${icon}`}></span>
        {columnTitle[0].toUpperCase() + columnTitle.slice(1).toLowerCase()}
      </h2>
      <ul className={styles.cards}>
        {cards.map(({ id, title }) => (
          <Card id={id}>{title}</Card>
        ))}
      </ul>
    </article>
  );
}

export default Column;
