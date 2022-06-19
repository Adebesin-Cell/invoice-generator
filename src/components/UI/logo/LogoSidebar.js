import logo from "../../../assets/images/logo--2.png";
import styles from "./LogoSidebar.module.scss";

const LogoSidebar = function (props) {
  return <img src={logo} alt='logo' className={styles.logo__small} />;
};

export default LogoSidebar;
