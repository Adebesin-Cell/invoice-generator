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
        <div className={styles.invoice__overview}>
          <h1 className={styles.invoice__subject}>Design System</h1>
          <div className={styles.invoice__details}>
            <div className={styles.invoice__date}>
              <h3 className={styles["invoice__date--label"]}>Invoice Date</h3>
              <p className={styles["invoice__date--value"]}>1 July, 2022</p>
            </div>
            <div className={styles.invoice__due}>
              <h3 className={styles["invoice__due--label"]}>Due Date</h3>
              <p className={styles["invoice__due--value"]}>8 July, 2022</p>
            </div>
          </div>
        </div>
        <table className={styles.table}>
          <thead className={styles.table__head}>
            <tr
              className={`${styles.table__row} ${styles["table__row--flex"]}`}
            >
              <td className={`${styles.table__title}`}>QTY</td>
              <td
                className={`${styles.table__title} ${styles["table__title--lg"]}`}
              >
                Item
              </td>
              <td className={`${styles.table__title}`}>Price</td>
              <td className={`${styles.table__title}`}>Amount</td>
            </tr>
          </thead>
          <tbody className={styles.table__body}>
            <tr
              className={`${styles.table__row} ${styles["table__row--space"]} ${styles["table__row--flex"]}`}
            >
              <td className={`${styles.table__definition}`}>1</td>
              <td
                className={`${styles.table__definition} ${styles["table__definition--lg"]}`}
              >
                Gold Chain
              </td>
              <td className={`${styles.table__definition}`}>15,000</td>
              <td className={`${styles.table__definition}`}> ₦15,000.00</td>
            </tr>
            <tr
              className={`${styles.table__row} ${styles["table__row--space"]} ${styles["table__row--flex"]}`}
            >
              <td className={`${styles.table__definition}`}>1</td>
              <td
                className={`${styles.table__definition} ${styles["table__definition--lg"]}`}
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </td>
              <td className={`${styles.table__definition}`}>15,000</td>
              <td className={`${styles.table__definition}`}> ₦15,000.00</td>
            </tr>
          </tbody>
        </table>
        <div className={styles.invoice__total}>
          <h3 className={styles["invoice__total--label"]}>Total:</h3>
          <p className={styles["invoice__total--value"]}>₦15,000.00</p>
        </div>
        <div className={styles.invoice__note}>
          <h1 className={styles["invoice__note--heading"]}>Notes</h1>
          <p className={styles["invoice__note--text"]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            aliquam pulvinar dolor urna enim vitae vel. Ultrices eget ut.
          </p>
        </div>
      </div>
    </div>
  );
});

export default MobileInvoiceTemplate;
