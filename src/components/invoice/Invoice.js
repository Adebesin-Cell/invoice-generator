import { useState } from "react";
import { Link } from "react-router-dom";
import InvoiceEmpty from "./empty/InvoiceEmpty";
import InvoiceList from "./invoiceList/InvoiceList";
import styles from "./Invoice.module.scss";
import { ReactComponent as Add } from "../../assets/svgs/icon-add.svg";
import Header from "../header/Header";

const InvoiceView = function (props) {
  const [isEmpty, setIsEmpty] = useState(true);

  // eslint-disable-next-line no-unused-vars
  const addInvoiceHandler = function (invoice) {
    setIsEmpty(false);
  };

  return (
    <>
      <div className={styles.invoice}>
        <div className={styles.invoice__intro}>
          <div className={styles.invoice__header}>
            <h1 className={styles.invoice__heading}>Invoice</h1>
            <p className={styles.invoice__paragraph}>
              You can add or view your invoices here.
            </p>
          </div>
        </div>
        <div className={styles.invoice__container}>
          {isEmpty ? <InvoiceEmpty /> : <InvoiceList />}
        </div>
        <div className={styles.invoice__add}>
          <Link to='add' className={styles["invoice__add--link"]}>
            <Add />
          </Link>
        </div>
      </div>
      <div className={styles.invoice__mobile}>
        <Header />
        <div className={styles.invoice__mobileIntro}>
          <h1 className={styles.invoice__mobileHeading}>Hi Lope👋</h1>
          <p className={styles.invoice__mobileParagraph}>
            You can add or view your invoices here.
          </p>
        </div>
        <div className={styles.invoice__container}>
          {isEmpty ? <InvoiceEmpty /> : <InvoiceList />}
        </div>
        <div className={styles.invoice__add}>
          <Link to='add' className={styles["invoice__add--link"]}>
            <Add />
          </Link>
        </div>
      </div>
    </>
  );
};

export default InvoiceView;
