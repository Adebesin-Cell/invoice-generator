import Sidebar from "../components/sidebar/Sidebar";
import DashboardView from "../components/dashboard/Dashboard";
import styles from "../styles/Dashboard.module.scss";

const Dashboard = function () {
  return (
    <div className={styles.dashboard}>
      <Sidebar />
      <DashboardView />
    </div>
  );
};

export default Dashboard;
