import styles from "./Form.module.scss";
import Input from "../UI/input/Input";
import { Link } from "react-router-dom";
import Button from "../UI/button/Button";

const Form = function () {
  return (
    <form action='' className={styles.form} method='POST'>
      <h1 className={styles.form__header}>Sign In</h1>
      <div className={styles.form__group}>
        <Input
          type='email'
          placeholder='Email'
          className={styles.form__input}
          name='email'
          role='email'
          label='email'
        />
      </div>
      <div className={styles.form__group}>
        <Input
          type='password'
          placeholder='Password'
          className={styles.form__input}
          name='password'
          role='password'
          label='password'
        />
      </div>
      <div className={`${styles.form__group} ${styles.form__box}`}>
        <div className={styles.form__store}>&nbsp;</div>
        <Link className={styles.form__link} to='/reset-password'>
          Forgot Password?
        </Link>
      </div>
      <div className={`${styles.form__group} ${styles["form__button--box"]}`}>
        <Button
          text='Login'
          role='submit'
          type='submit'
          className={`${styles.form__button} ${styles["form__button--blue"]}`}
        />
        <Link
          to='/register'
          className={`${styles.form__button} ${styles["form__button--white"]}`}
        >
          Register
        </Link>
      </div>
    </form>
  );
};

export default Form;
