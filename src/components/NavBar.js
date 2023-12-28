import { Link, NavLink } from "react-router-dom";
import styles from "./NavBar.module.scss";

function NavBar() {
  return (
    <nav className={styles["main-nav"]}>
      <Link to="/">
        <i className="fa fa-tasks"></i>
      </Link>
      <ul className={styles["nav-list"]}>
        <li>
          <NavLink
            className={({ isActive }) => isActive && styles.linkActive}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => isActive && styles.linkActive}
            to="/favorite"
          >
            Favorite
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => isActive && styles.linkActive}
            to="/about"
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
