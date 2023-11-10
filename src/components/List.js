import Column from "./Column/Column";

import styles from "./List.module.scss";
function List() {
  return (
    <div>
      <header className={styles.header}>
        <p className={styles.title}>
          Things to do <span>soon</span>
        </p>
      </header>
      <p className={styles.description}>
        Interesting things I want to check out
      </p>
      <section className={styles.columns}>
        <Column columnTitle="books" icon="book" />
        <Column columnTitle="movies" icon="gamepad" />
        <Column columnTitle="games" icon="film" />
      </section>
    </div>
  );
}
export default List;
