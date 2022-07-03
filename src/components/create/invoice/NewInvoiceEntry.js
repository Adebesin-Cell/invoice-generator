import { useState } from "react";
import Input from "../../UI/input/Input";
import styles from "./NewInvoiceEntry.module.scss";

const NewEntry = function ({
  id,
  title,
  quantity,
  description,
  amount,
  price,
}) {
  const [currentPrice, setCurrentPrice] = useState(0);
  const [currentAmount, setCurrentAmount] = useState(0);

  const priceChangeHandler = function (e) {
    setCurrentPrice(+e.target.value);
  };

  const amountChangeHandler = function (e) {
    setCurrentAmount(+e.target.value);
  };

  return (
    <div className={styles.entry}>
      <div className={`${styles.entry__group} ${styles["entry__group--sm"]}`}>
        <Input
          placeholder='Item'
          type='text'
          className={styles.entry__input}
          name='Item'
          aria-label='Item'
          role='Invoice input'
          onChange={() => {
            console.log("hey");
          }}
        />
      </div>
      <div className={`${styles.entry__group} ${styles["entry__group--lg"]}`}>
        <Input
          placeholder='Description'
          type='text'
          className={styles.entry__input}
          name='Description'
          aria-label='Description'
          role='Invoice input'
          onChange={() => {
            console.log("hey");
          }}
        />
      </div>
      <div className={`${styles.entry__group} ${styles["entry__group--sm"]}`}>
        <Input
          placeholder='Quantity'
          type='number'
          className={styles.entry__input}
          name='Quantity'
          aria-label='Quantity'
          role='Invoice input'
          step='0.01'
          min='0'
          onChange={amountChangeHandler}
        />
      </div>
      <div className={`${styles.entry__group} ${styles["entry__group--sm"]}`}>
        <Input
          placeholder='Price'
          type='number'
          className={styles.entry__input}
          name='Price'
          aria-label='Price'
          role='Invoice input'
          step='0.01'
          min='0'
          onChange={priceChangeHandler}
        />
      </div>
      <div className={`${styles.entry__group} ${styles["entry__group--sm"]}`}>
        <div className={styles.entry__amount}>
          <h1>Amount</h1>
          <p>{`₦${(currentAmount * currentPrice).toFixed(2)}`}</p>
        </div>
      </div>
    </div>
  );
};

export default NewEntry;
