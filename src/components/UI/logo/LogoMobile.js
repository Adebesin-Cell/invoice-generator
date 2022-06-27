import styles from "./LogoMobile.module.scss";

const LogoMobile = function () {
  return (
    <div className={styles.logo}>
      <a href='/dashboard' className={styles.logo__link}>
        <span>Bizz</span>
      </a>
    </div>
  );
};

export default LogoMobile;
