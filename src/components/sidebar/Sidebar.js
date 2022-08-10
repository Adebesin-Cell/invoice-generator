import { NavLink } from 'react-router-dom';
import LogoSidebar from '../UI/logo/LogoSidebar';
import styles from './Sidebar.module.scss';
import * as Icon from 'react-feather';

const Sidebar = function () {
  const ActiveClass = `${styles['sidebar__link']} ${styles['sidebar__link--active']}`;
  const InActiveClass = `${styles['sidebar__link']}`;

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__header}>
        <LogoSidebar />
      </div>
      <ul className={styles.sidebar__list}>
        <li className={styles.sidebar__item}>
          <NavLink
            to='/dashboard'
            className={({ isActive }) =>
              isActive ? ActiveClass : InActiveClass
            }
          >
            <span className={styles.sidebar__icon}>
              <Icon.Home />
            </span>
            <span className={styles.sidebar__text}>Dashboard</span>
          </NavLink>
        </li>
        <li className={styles.sidebar__item}>
          <NavLink
            to='/products'
            className={({ isActive }) =>
              isActive ? ActiveClass : InActiveClass
            }
          >
            <span className={styles.sidebar__icon}>
              <Icon.ShoppingBag />
            </span>
            <span className={styles.sidebar__text}>Products</span>
          </NavLink>
        </li>
        <li className={styles.sidebar__item}>
          <NavLink
            to='/invoice'
            className={({ isActive }) =>
              isActive ? ActiveClass : InActiveClass
            }
          >
            <span className={styles.sidebar__icon}>
              <Icon.CreditCard />
            </span>
            <span className={styles.sidebar__text}>Generate Invoice</span>
          </NavLink>
        </li>
        <li className={styles.sidebar__item}>
          <NavLink
            to='/report'
            className={({ isActive }) =>
              isActive ? ActiveClass : InActiveClass
            }
          >
            <span className={styles.sidebar__icon}>
              <Icon.DollarSign />
            </span>
            <span className={styles.sidebar__text}>Sales Report</span>
          </NavLink>
        </li>
        <li className={styles.sidebar__item}>
          <NavLink
            to='/invoice'
            className={({ isActive }) =>
              isActive ? ActiveClass : InActiveClass
            }
          >
            <span className={styles.sidebar__icon}>
              <Icon.Users />
            </span>
            <span className={styles.sidebar__text}>Customers</span>
          </NavLink>
        </li>
        <li className={styles.sidebar__item}>
          <NavLink
            to='/payment'
            className={({ isActive }) =>
              isActive ? ActiveClass : InActiveClass
            }
          >
            <span className={styles.sidebar__icon}>
              <Icon.Loader />
            </span>
            <span className={styles.sidebar__text}>Payments</span>
          </NavLink>
        </li>
        <li className={styles.sidebar__item}>
          <NavLink
            to='/invoice'
            className={({ isActive }) =>
              isActive ? ActiveClass : InActiveClass
            }
          >
            <span className={styles.sidebar__icon}>
              <Icon.Tool />
            </span>
            <span className={styles.sidebar__text}>Settings</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
