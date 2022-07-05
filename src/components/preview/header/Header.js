import styles from "./Header.module.scss";
import { Link, useLocation } from "react-router-dom";
import Button from "../../UI/button/Button";
import { ReactComponent as Share } from "../../../assets/svgs/icon-share-2.svg";
import { ReactComponent as Edit } from "../../../assets/svgs/icon-edit-3.svg";
import { ReactComponent as Download } from "../../../assets/svgs/icon-download.svg";

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
          <Link to={pathname}>Preview</Link>
        </div>
        <span className={styles.header__divider}>/</span>
        <div className={styles.header__directory}>
          <Link to={pathname}>Invoice</Link>
        </div>
      </div>
      <div className={styles.header__actions}>
        <ul className={styles.header__list}>
          <li className={styles.header__item}>
            <Button className={styles.header__btn} role='button'>
              <Edit />
            </Button>
          </li>
          <li className={styles.header__item}>
            <Button className={styles.header__btn} role='button'>
              <Download />
            </Button>
          </li>
          <li className={styles.header__item}>
            <Button className={styles.header__btn} role='button'>
              <Share />
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
