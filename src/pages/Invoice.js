import styles from "../styles/Invoice.module.scss";
import Sidebar from "../components/sidebar/Sidebar";
import InvoiceView from "../components/invoice/Invoice";

const Invoice = function (props) {
  return (
    <div className={styles.invoice}>
      <Sidebar />
      <InvoiceView />
    </div>
  );
};

export default Invoice;
