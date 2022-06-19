import { useContext } from "react";
import { NavLink } from "react-router-dom";
import NavigationContext from "../../store/navigation-context";
import LogoSidebar from "../UI/logo/LogoSidebar";
import Button from "../UI/button/Button";
import { ReactComponent as DashboardIcon } from "../../assets/svgs/icon-dashboard.svg";
import styles from "./Sidebar.module.scss";

const Sidebar = function (props) {
  const ctx = useContext(NavigationContext);

  console.log(ctx.pathname);

  const ActiveClass = `${styles["sidebar__link--nav"]} ${styles["sidebar__link--active"]}`;
  const InActiveClass = `${styles["sidebar__link--nav"]}`;

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__header}>
        <a href='/dashboard' className={styles.sidebar__link}>
          <span className={styles.sidebar__logo}>
            <LogoSidebar />
          </span>
          <span className={styles.sidebar__title}>
            <span className={styles["sidebar__title--top"]}>
              Bizz Dashboard
            </span>
            <span className={styles["sidebar__title--bottom"]}>workplace</span>
          </span>
        </a>
      </div>
      <nav className={styles.sidebar__nav}>
        <li className={styles.sidebar__item}>
          <NavLink
            to='/dashboard'
            className={({ isActive }) =>
              isActive ? ActiveClass : InActiveClass
            }
          >
            <span className={styles.sidebar__icon}>
              <DashboardIcon />
            </span>
            <span className={styles.sidebar__text}>My Dashboard</span>
          </NavLink>
        </li>
      </nav>
      <div className={styles.sidebar__footer}>
        <Button className={styles.sidebar__button}>
          <span className={styles.sidebar__username}>LA</span>
          <span className={styles.sidebar__name}>Lope Adebesin</span>
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
