import overlay from "../../assets/images/overlay.png";
import styles from "./Dashboard.module.scss";
import { ReactComponent as Help } from "../../assets/svgs/icon-help.svg";

const DashboardView = function (props) {
  return (
    <main className={styles.view}>
      <div className={styles.view__overlay}>
        <img
          src={overlay}
          alt='overlay'
          className={styles["view__overlay-image"]}
        />
      </div>
      <div className={styles.view__container}>
        <div className={styles.view__intro}>
          <h1 className={styles.view__heading}>Welcome 👋</h1>
        </div>
        <div className={styles.view__help}>
          <span className={styles["view__help--icon"]}>
            <Help />
          </span>
        </div>
      </div>
    </main>
  );
};

export default DashboardView;
