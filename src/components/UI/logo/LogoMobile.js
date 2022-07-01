import styles from "./LogoMobile.module.scss";
import { Link } from "react-router-dom";

const LogoMobile = function () {
  return (
    <div className={styles.logo}>
      <Link to='/dashboard' className={styles.logo__link}>
        <span>Bizz</span>
      </Link>
    </div>
  );
};

export default LogoMobile;
