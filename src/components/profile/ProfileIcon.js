import styles from "./ProfileIcon.module.scss";
import avatar from "../../assets/images/avatar--8.jpg";

const ProfileIcon = function () {
  return (
    <div className={styles["profile-icon"]}>
      <img
        src={avatar}
        alt='avatar'
        className={styles["profile-icon__image"]}
      />
    </div>
  );
};

export default ProfileIcon;
