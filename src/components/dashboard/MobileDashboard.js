import styles from "./MobileDashboard.module.scss";
import Header from "../header/Header";
import { ReactComponent as External } from "../../assets/svgs/icon-open-outline.svg";

const MobileDashboard = function (props) {
  return (
    <main className={styles.view}>
      <Header />
      <div className={styles.view__intro}>
        <h1 className={styles.view__heading}>Hi Lope👋</h1>
        <p className={styles.view__paragraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
          temporibus laboriosam quas nisi dolorem ducimus
        </p>
        <a
          name='your web store'
          href='/'
          target='_blank'
          rel='noopener noreferrer'
          className={styles.view__go}
        >
          <span className='text'>View your web store</span>
          <span className={styles["view__go--icon"]}>
            <External />
          </span>
        </a>
      </div>
    </main>
  );
};

export default MobileDashboard;
