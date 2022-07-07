import React from "react";
import styles from "./MobileInvoiceTemplate.module.scss";
import BusinessLogo from "../../../assets/images/company-logo.png";

const MobileInvoiceTemplate = React.forwardRef(function (props, ref) {
  return (
    <div ref={ref} className={styles.invoice}>
      <div className={styles["invoice__image-box"]}>
        <img
          src={BusinessLogo}
          alt='business logo'
          className={styles.invoice__image}
        />
      </div>
      <div className={styles.invoice__header}>
        <h1 className={styles.invoice__heading}>Lope Inc.</h1>
        <p className={styles.invoice__address}>
          4945 Forest Avenue New York 10004 United States
        </p>
      </div>
      <div className={styles.invoice__body}>
        <h4 className={styles.invoice__billing}>Billing to:</h4>
        <p className={styles.invoice__to}>
          Terry Baptista 3455 Geraldine Lane, New York 10013 United States
        </p>
        <div className={styles.invoice__info}>
          <div className={styles.invoice__number}>
            <h3 className={styles["invoice__number--label"]}>Invoice number</h3>
            <p className={styles["invoice__number--value"]}>#00261</p>
          </div>
          <div className={styles.invoice__reference}>
            <h3 className={styles["invoice__reference--label"]}>Reference</h3>
            <p className={styles["invoice__reference--value"]}>INV-057</p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default MobileInvoiceTemplate;
