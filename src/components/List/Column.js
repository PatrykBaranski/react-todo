import Card from "./Card";
import CardForm from "./CardForm";
import styles from "./Column.module.scss";
import { useSelector } from "react-redux/es/hooks/useSelector";

function Column({ title, icon, id }) {
  const cards = useSelector((state) =>
    state.cards.filter((card) => card.columnId === id)
  );
  return (
    <article className={styles.column}>
      <h2 className={styles.title}>
        <span className={`${styles.icon} fa fa-${icon}`}></span>
        {title[0].toUpperCase() + title.slice(1).toLowerCase()}
      </h2>
      <ul className={styles.cards}>
        {cards.map(({ id, title }) => (
          <Card key={id} id={id}>
            {title}
          </Card>
        ))}
      </ul>
      <CardForm columnId={id} />
    </article>
  );
}

export default Column;
