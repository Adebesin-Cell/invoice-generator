import styles from './Form.module.scss';
import Input from '../UI/input/Input';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../UI/button/Button';
import Checkbox from '../UI/checkbox/Checkbox';

const Form = function () {
  const navigate = useNavigate();

  const formSubmitHandler = function (e) {
    e.preventDefault();
    navigate('/dashboard', { replace: true });
  };

  return (
    <form action='' onSubmit={formSubmitHandler} className={styles.form}>
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
        <div className={styles.form__store}>
          <div className={styles.form__check}>
            <Checkbox className={styles.form__checkbox} />
          </div>
          <label htmlFor='remember-me' className={styles.form__remember}>
            Remember me
          </label>
        </div>
        <Link className={styles.form__link} to='/reset-password'>
          Forgot Password?
        </Link>
      </div>
      <div className={`${styles.form__group} ${styles['form__button--box']}`}>
        <Button
          text='Login'
          role='submit'
          type='submit'
          className={`${styles.form__button} ${styles['form__button--blue']}`}
        >
          Login
        </Button>
        <Link
          to='/register'
          className={`${styles.form__button} ${styles['form__button--white']}`}
        >
          Register
        </Link>
      </div>
      <div className={styles.form__agreement}>
        <p className={styles['form__agreement--text']}>
          By signin up, you agree to our{' '}
          <Link to='our-terms'>Terms and Conditions</Link> &{' '}
          <Link to='/our-policy'>Privacy Policy</Link>.
        </p>
      </div>
    </form>
  );
};

export default Form;
