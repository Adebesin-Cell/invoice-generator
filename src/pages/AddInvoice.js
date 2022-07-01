import styles from "../styles/AddInvoice.module.scss";
import NewInvoice from "../components/create/invoice/NewInvoice";

const AddInvoice = function (props) {
  return (
    <div className={styles.view}>
      <NewInvoice />
    </div>
  );
};

export default AddInvoice;
