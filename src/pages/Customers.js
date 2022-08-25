import styles from '../styles/Customers.module.scss';
import Sidebar from '../components/sidebar/Sidebar';
import CustomersList from '../components/customers/CustomersList';

const CustomersPage = function () {
  return (
    <div className={styles.view}>
      <Sidebar />
      <CustomersList />
    </div>
  );
};

export default CustomersPage;
