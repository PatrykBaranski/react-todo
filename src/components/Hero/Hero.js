import SearchForm from "../SearchForm";
import styles from "./Hero.module.scss";
import PageTitle from "../PageTitle/PageTitle";

function Hero() {
  return (
    <div className={styles.hero}>
      <PageTitle>My first React App</PageTitle>
      <p className={styles.subtitle}>
        A simple to-do app, with list, columns and cards
      </p>
      <SearchForm />
    </div>
  );
}

export default Hero;
