import Sidebar from '../components/sidebar/Sidebar';
import styles from '../styles/Report.module.scss';
import SalesReport from '../components/report/SalesReport';

const Report = function () {
  return (
    <div className={styles.report}>
      <Sidebar />
      <SalesReport />
    </div>
  );
};

export default Report;
