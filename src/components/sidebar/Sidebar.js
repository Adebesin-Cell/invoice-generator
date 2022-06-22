import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import NavigationContext from "../../store/navigation-context";
import LogoSidebar from "../UI/logo/LogoSidebar";
import Button from "../UI/button/Button";
import SidebarMenu from "./SidebarMenu";
import { Icons } from "../UI/icons/Icons";
import styles from "./Sidebar.module.scss";
import { ReactComponent as Report } from "../../assets/svgs/icon-shop.svg";

const Sidebar = function (props) {
  const [isClosed, setIsClosed] = useState(true);
  const ctx = useContext(NavigationContext);

  console.log(ctx);

  const toggleFooterMenuHandler = function (e) {
    setIsClosed(!isClosed);
  };

  const setIsClosedHandler = function (e) {
    setIsClosed(true);
  };

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
            name='my dashboard'
          >
            <span className={styles.sidebar__icon}>{Icons.DashboardIcon}</span>
            <span className={styles.sidebar__text}>My Dashboard</span>
          </NavLink>
        </li>
        <ul className={styles.sidebar__list}>
          <h3 className={styles.sidebar__heading}>Features</h3>
          <div className={styles.sidebar__box}>
            <li className={styles.sidebar__item}>
              <NavLink
                to='/invoice'
                className={({ isActive }) =>
                  isActive ? ActiveClass : InActiveClass
                }
                name='invoice builder'
              >
                <span className={styles.sidebar__icon}>
                  {Icons.InvoiceBuilder}
                </span>
                <span className={styles.sidebar__text}>Invoice Builder</span>
              </NavLink>
            </li>
            <li className={styles.sidebar__item}>
              <NavLink
                to='/sales'
                className={({ isActive }) =>
                  isActive ? ActiveClass : InActiveClass
                }
                name='sales order'
              >
                <span className={styles.sidebar__icon}>
                  {Icons.DashboardIcon}
                </span>
                <span className={styles.sidebar__text}>Sales Order</span>
              </NavLink>
            </li>
            <li className={styles.sidebar__item}>
              <NavLink
                to='/report'
                className={({ isActive }) =>
                  isActive ? ActiveClass : InActiveClass
                }
                name='report'
              >
                <span className={styles.sidebar__icon}>
                  <Report className={styles["sidebar__icon--lg"]} />
                </span>
                <span className={styles.sidebar__text}>Report</span>
              </NavLink>
            </li>
            <li className={styles.sidebar__item}>
              <NavLink
                to='/products'
                className={({ isActive }) =>
                  isActive ? ActiveClass : InActiveClass
                }
                name='products'
              >
                <span className={styles.sidebar__icon}>{Icons.Cart}</span>
                <span className={styles.sidebar__text}>Products</span>
              </NavLink>
            </li>
          </div>
        </ul>
        <ul className={styles.sidebar__list}>
          <h3 className={styles.sidebar__heading}>General</h3>
          <div className={styles.sidebar__box}>
            <li className={styles.sidebar__item}>
              <NavLink
                to='/documentation'
                className={({ isActive }) =>
                  isActive ? ActiveClass : InActiveClass
                }
                name='documentation'
              >
                <span className={styles.sidebar__icon}>
                  {Icons.Information}
                </span>
                <span className={styles.sidebar__text}>Documentation</span>
              </NavLink>
            </li>
            <li className={styles.sidebar__item}>
              <NavLink
                to='/settings'
                className={({ isActive }) =>
                  isActive ? ActiveClass : InActiveClass
                }
                name='settings'
              >
                <span className={styles.sidebar__icon}>{Icons.Settings}</span>
                <span className={styles.sidebar__text}>Settings</span>
              </NavLink>
            </li>
          </div>
        </ul>
      </nav>
      <div className={styles.sidebar__footer}>
        <Button
          className={styles.sidebar__button}
          role='options'
          onClick={toggleFooterMenuHandler}
        >
          <div className={styles.sidebar__info}>
            <span className={styles.sidebar__username}>LA</span>
            <span className={styles.sidebar__name}>Lope Adebesin</span>
          </div>
          <div className={styles.sidebar__option}>{Icons.EllipsisVertical}</div>
        </Button>
      </div>
      {!isClosed && <SidebarMenu onClick={setIsClosedHandler} />}
    </div>
  );
};

export default Sidebar;
