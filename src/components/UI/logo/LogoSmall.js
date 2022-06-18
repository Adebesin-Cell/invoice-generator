import logo from "../../../assets/images/logo.png";
import styles from "./LogoSmall.module.scss";

const LogoSmall = function () {
  return <img src={logo} alt='logo' className={styles.logo__small} />;
};

export default LogoSmall;
