import styles from './Topbar.module.scss';
import Input from '../../components/UI/input/Input';
import Profile from '../profile';

const Topbar = function (props) {
  return (
    <div className={styles.view}>
      <div className={styles['view__title']}>
        <h1 className={styles.view__heading}>{props.title}</h1>
      </div>
      <div className={styles.view__search}>
        <Input
          placeholder='Search Product'
          name='search'
          className={styles.view__input}
        ></Input>
      </div>
      <Profile />
    </div>
  );
};

export default Topbar;
