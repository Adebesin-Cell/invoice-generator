import { NavLink } from "react-router-dom";
import Card from "../../utils/card/Card";
import styles from "./SidebarMenu.module.scss";
import { ReactComponent as Logout } from "../../assets/svgs/icon-log-out-outline.svg";

const SidebarMenu = function (props) {
  return (
    <div className={styles.sidebar__menu}>
      <Card>
        <ul className={styles["sidebar__menu--list"]}>
          <li className={styles["sidebar__menu--item"]}>
            <NavLink
              to='/profile'
              className={styles["sidebar__menu--link"]}
              name='profile'
              onClick={props.onClick}
            >
              <span>Profile</span>
              <span style={{ width: "18px", height: "18px" }}>&nbsp;</span>
            </NavLink>
          </li>
          <li className={styles["sidebar__menu--item"]}>
            <NavLink
              to='/logout'
              className={`${styles["sidebar__menu--link"]} ${styles["sidebar__menu--link--dangerous"]}`}
              name='log-out'
              onClick={props.onClick}
            >
              <span>Logout</span>
              <span>
                <Logout />
              </span>
            </NavLink>
          </li>
        </ul>
      </Card>
    </div>
  );
};

export default SidebarMenu;
