import styles from './LogoSidebar.module.scss';
import { Link } from 'react-router-dom';

const LogoSidebar = function () {
  return (
    <div className={styles.logo}>
      <Link to='/dashboard' className={styles.logo__link}>
        <h1 className={styles.logo__text}>Bizz</h1>
      </Link>
    </div>
  );
};

export default LogoSidebar;
