import Header from "../header/Header";
import styles from "./InvoiceTemplate.module.scss";
import BusinessLogo from "../../../assets/images/company-logo.png";

const InvoiceTemplate = function (props) {
  return (
    <div className={styles.view}>
      <Header />
      <div className={styles.invoice}>
        <div className={styles.invoice__header}>
          <div className={styles["invoice__image-box"]}>
            <img
              src={BusinessLogo}
              alt='business logo'
              className={styles.invoice__image}
            />
          </div>
          <div className={styles.invoice__info}>
            <h1 className={styles.invoice__heading}>Lope inc.</h1>
            <div className={styles.invoice__box}>
              <a
                href='tel:+2349060058210'
                name='Lope inc. contact number'
                target='_blank'
                rel='noopener noreferrer'
                className={styles.invoice__link}
              >
                646-888-6885
              </a>
            </div>
            <div className={styles.invoice__box}>
              <a
                href='mailto:adebesintolulope80@gmail.com'
                name='Lope inc. contact email'
                target='_blank'
                rel='noopener noreferrer'
                className={styles.invoice__link}
              >
                adebesintolulope80@gmail.com
              </a>
            </div>
            <div className={styles.invoice__box}>
              <a
                href='https://bizz.lope.shop'
                name='Lope inc. website'
                target='_blank'
                rel='noopener noreferrer'
                className={styles.invoice__link}
              >
                bizz.lope.shop
              </a>
            </div>
          </div>
          <div className={styles.invoice__details}>
            <p>4945 Forest Avenue</p>
            <p>New York</p>
            <p>10004</p>
            <p>United States</p>
          </div>
        </div>
        <div className={styles.invoice__body}>
          <div className={styles.invoice__wrapper}>
            <div className={styles.invoice__container}>
              <h3 className={styles.invoice__title}>Billed to</h3>
              <p className={styles.invoice__value}>Terry Baptista</p>
              <div className={styles.invoice__address}>
                <p>3455 Geraldine Lane,</p>
                <p>New York</p>
                <p>10013</p>
                <p>United States</p>
              </div>
              <div className={`${styles.invoice__subject} ${styles.space__md}`}>
                <p>Design system</p>
              </div>
            </div>
            <div className={styles.invoice__container}>
              <h3 className={styles.invoice__title}>Invoice number</h3>
              <p className={styles.invoice__value}>#00261</p>
              <h3 className={`${styles.invoice__title} ${styles.space__sm}`}>
                Reference
              </h3>
              <p className={styles.invoice__value}>INV-057</p>
              <div className={`${styles.invoice__date} ${styles.space__md}`}>
                <h3 className={`${styles.invoice__title} ${styles.space__xsm}`}>
                  Invoice Date
                </h3>
                <p className={styles.invoice__value}>1 July, 2022</p>
              </div>
            </div>
            <div className={styles.invoice__container}>
              <h3 className={styles.invoice__title}>Invoice of (NGN)</h3>
              <p className={styles.invoice__price}>₦15,000.00</p>
              <div className={`${styles.invoice__due} ${styles.space__xlg}`}>
                <h3 className={`${styles.invoice__title} ${styles.space__xsm}`}>
                  Due Date
                </h3>
                <p className={styles.invoice__value}>8 July, 2022</p>
              </div>
            </div>
          </div>
          <table className={styles.table}>
            <thead className={styles.table__header}>
              <tr
                className={`${styles.table__row} ${styles["table__row--lg"]}`}
              >
                <td>Item Details</td>
              </tr>
              <tr
                className={`${styles.table__row} ${styles["table__row--sm"]}`}
              >
                <td>Qty</td>
              </tr>
              <tr
                className={`${styles.table__row} ${styles["table__row--sm"]}`}
              >
                <td>Price</td>
              </tr>
              <tr
                className={`${styles.table__row} ${styles["table__row--sm"]}`}
              >
                <td>Amount</td>
              </tr>
            </thead>
            <tbody className={styles.table__body}>
              <tr
                className={`${styles.table__row} ${styles["table__row--body"]}`}
              >
                <div className={styles.table__box}>
                  <td
                    className={`${styles.table__definition} ${styles["table__definition--lg"]}`}
                  >
                    Gold chain
                  </td>
                  <td
                    className={`${styles.table__definition} ${styles["table__definition--lg"]} ${styles["table__description"]}`}
                  >
                    Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.
                  </td>
                </div>
                <td
                  className={`${styles.table__definition} ${styles["table__definition--sm"]}`}
                >
                  01
                </td>
                <td
                  className={`${styles.table__definition} ${styles["table__definition--sm"]}`}
                >
                  15,000
                </td>
                <td
                  className={`${styles.table__definition} ${styles["table__definition--sm"]}`}
                >
                  ₦15,000.00
                </td>
              </tr>
              <tr
                className={`${styles.table__row} ${styles["table__row--body"]}`}
              >
                <div className={styles.table__box}>
                  <td
                    className={`${styles.table__definition} ${styles["table__definition--lg"]}`}
                  >
                    Gold chain
                  </td>
                  <td
                    className={`${styles.table__definition} ${styles["table__definition--lg"]} ${styles["table__description"]}`}
                  >
                    Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.
                  </td>
                </div>
                <td
                  className={`${styles.table__definition} ${styles["table__definition--sm"]}`}
                >
                  01
                </td>
                <td
                  className={`${styles.table__definition} ${styles["table__definition--sm"]}`}
                >
                  15,000
                </td>
                <td
                  className={`${styles.table__definition} ${styles["table__definition--sm"]}`}
                >
                  ₦15,000.00
                </td>
              </tr>
              <tr
                className={`${styles.table__row} ${styles["table__row--body"]}`}
              >
                <div className={styles.table__box}>
                  <td
                    className={`${styles.table__definition} ${styles["table__definition--lg"]}`}
                  >
                    Gold chain
                  </td>
                  <td
                    className={`${styles.table__definition} ${styles["table__definition--lg"]} ${styles["table__description"]}`}
                  >
                    Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.
                  </td>
                </div>
                <td
                  className={`${styles.table__definition} ${styles["table__definition--sm"]}`}
                >
                  01
                </td>
                <td
                  className={`${styles.table__definition} ${styles["table__definition--sm"]}`}
                >
                  15,000
                </td>
                <td
                  className={`${styles.table__definition} ${styles["table__definition--sm"]}`}
                >
                  ₦15,000.00
                </td>
              </tr>
              <tr
                className={`${styles.table__row} ${styles["table__row--body"]}`}
              >
                <div className={styles.table__box}>
                  <td
                    className={`${styles.table__definition} ${styles["table__definition--lg"]}`}
                  >
                    Gold chain
                  </td>
                  <td
                    className={`${styles.table__definition} ${styles["table__definition--lg"]} ${styles["table__description"]}`}
                  >
                    Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.
                  </td>
                </div>
                <td
                  className={`${styles.table__definition} ${styles["table__definition--sm"]}`}
                >
                  01
                </td>
                <td
                  className={`${styles.table__definition} ${styles["table__definition--sm"]}`}
                >
                  15,000
                </td>
                <td
                  className={`${styles.table__definition} ${styles["table__definition--sm"]}`}
                >
                  ₦15,000.00
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InvoiceTemplate;
