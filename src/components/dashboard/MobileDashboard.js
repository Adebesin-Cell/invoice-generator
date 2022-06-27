import styles from "./MobileDashboard.module.scss";
import Header from "../header/Header";

const MobileDashboard = function (props) {
  return (
    <main className={styles.view}>
      <Header />
    </main>
  );
};

export default MobileDashboard;
