import styles from "./Column.module.scss";
function Column({ columnTitle, icon }) {
  return (
    <article className={styles.column}>
      <h2 className={styles.title}>
        <span className={`${styles.icon} fa fa-${icon}`}></span>
        {columnTitle[0].toUpperCase() + columnTitle.slice(1).toLowerCase()}
      </h2>
    </article>
  );
}

export default Column;
