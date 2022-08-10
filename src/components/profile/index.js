import ProfileIcon from './ProfileIcon';
import styles from './Profile.module.scss';

const Profile = function () {
  return (
    <div className={styles.view}>
      <ProfileIcon />
      <div className={styles.view__details}>
        <h1 className={styles.view__title}>Amode Habeeb</h1>
        <p className={styles.view__paragraph}>Zealarax Venture</p>
      </div>
    </div>
  );
};

export default Profile;
