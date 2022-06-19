import { useContext } from "react";
import NavigationContext from "../../store/navigation-context";
import LogoSmall from "../UI/logo/LogoSmall";
import styles from "./Sidebar.module.scss";

const Sidebar = function (props) {
  const ctx = useContext(NavigationContext);

  console.log(ctx.pathname);

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__header}>
        <a href='/dashboard' className={styles.sidebar__link}>
          <span className={styles.sidebar__logo}>
            <LogoSmall />
          </span>
          <span className={styles.sidebar__title}>
            <span className={styles["sidebar__title--top"]}>
              Bizz Dashboard
            </span>
            <span className={styles["sidebar__title--bottom"]}>workplace</span>
          </span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
