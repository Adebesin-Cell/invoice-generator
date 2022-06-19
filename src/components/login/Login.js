import styles from "./Login.module.scss";
import LogoSmall from "../UI/logo/LogoSmall";
import illustration from "../../assets/images/Illustration-3.png";
import Form from "../form/Form";

const LoginForm = function () {
  return (
    <div className={styles.login}>
      <div className={styles.login__wrapper}>
        <div className={styles.login__content}>
          <div className={styles.login__header}>
            <a href='/' className={styles.login__link}>
              <LogoSmall />
              <span>Bizz</span>
            </a>
          </div>
          <div className={styles.login__body}>
            <img src={illustration} alt='' className={styles.login__image} />
            <h1 className={styles.login__heading}>
              A few more clicks to sign in to your account.
            </h1>
            <p className={styles.login__paragraph}>
              Manage all your commercial activities in one place.
            </p>
          </div>
        </div>
        <div className={styles.login__left}>
          <div className={styles.login__form}>
            <div className={styles.login__inner}>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
