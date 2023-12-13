import styles from "./NavBar.module.scss";

function NavBar() {
  return (
    <nav className={styles["main-nav"]}>
      <a href="/">
        <i class="fa fa-tasks"></i>
      </a>
      <ul className={styles["nav-list"]}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/favorite">Favorite</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
