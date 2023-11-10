import SearchForm from "../SearchForm";
import styles from "./Hero.module.scss";

function Hero() {
  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>My first React App</h1>
      <p className={styles.subtitle}>
        A simple to-do app, with list, columns and cards
      </p>
      <SearchForm />
    </div>
  );
}

export default Hero;
