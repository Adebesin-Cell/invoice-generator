import styles from "./Login.module.scss";
import background from "../../assets/images/background.jpg";

const LoginForm = function () {
  return (
    <div className={styles.login}>
      <div className={styles.login__wrapper}>
        <div className={styles.login__content}>&nbsp;</div>
        <div className={styles.login__form}>&nbsp;</div>
      </div>
    </div>
  );
};

export default LoginForm;
