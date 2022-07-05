import Header from "../header/Header";
import styles from "./InvoiceTemplate.module.scss";

const InvoiceTemplate = function (props) {
  return (
    <div className={styles.view}>
      <Header />
    </div>
  );
};

export default InvoiceTemplate;
