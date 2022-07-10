import styles from "./Header.module.scss";
import { Link, useLocation } from "react-router-dom";

const Header = function (props) {
  const { pathname } = useLocation();

  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <Link to={pathname} className={styles["header__logo--link"]}>
          Bizz
        </Link>
      </div>
      <div className={styles.header__site}>
        <div className={styles.header__branch}>
          <Link to={pathname}>Create</Link>
        </div>
        <span className={styles.header__divider}>/</span>
        <div className={styles.header__directory}>
          <Link to={pathname}>{props.directory}</Link>
        </div>
      </div>
      <div className={styles.header__actions}>
        {/* ID goes here */}
        <p className={styles.header__paragraph}>{props.id}</p>
      </div>
    </header>
  );
};

export default Header;
