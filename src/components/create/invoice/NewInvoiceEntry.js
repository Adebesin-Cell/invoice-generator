import { useState } from 'react';
import Button from '../../UI/button/Button';
import Input from '../../UI/input/Input';
import styles from './NewInvoiceEntry.module.scss';
import { ReactComponent as Close } from '../../../assets/svgs/icon-close-sharp.svg';

const NewEntry = function ({ id, onDelete }) {
  const [currentPrice, setCurrentPrice] = useState(0);
  const [currentAmount, setCurrentAmount] = useState(0);

  const priceChangeHandler = function (e) {
    setCurrentPrice(+e.target.value);
  };

  const amountChangeHandler = function (e) {
    setCurrentAmount(+e.target.value);
  };

  const deleteItemHandler = function () {
    onDelete(id);
  };

  return (
    <div className={styles.entry} id={id}>
      <div className={`${styles.entry__group} ${styles['entry__group--lg']}`}>
        <Input
          placeholder='Item'
          type='text'
          className={styles.entry__input}
          name='Item'
          aria-label='Item'
          role='Invoice input'
          onChange={() => {
            console.log('hey');
          }}
        />
      </div>
      <div className={`${styles.entry__group} ${styles['entry__group--sm']}`}>
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
      <div className={`${styles.entry__group} ${styles['entry__group--sm']}`}>
        <Input
          placeholder='Discount'
          type='number'
          className={styles.entry__input}
          name='Discount'
          aria-label='Discount'
          role='Invoice input'
        />
      </div>
      <div className={`${styles.entry__group} ${styles['entry__group--sm']}`}>
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
      <div className={`${styles.entry__group} ${styles['entry__group--xsm']}`}>
        <div className={styles.entry__amount}>
          <h1>Amount</h1>
          <p>{`${(currentAmount * currentPrice).toFixed(2)}`}</p>
        </div>
      </div>
      <div className={`${styles.entry__group} ${styles['entry__group--xsm']}`}>
        <div className={styles.entry__delete}>
          <Button
            type='button'
            role='Delete'
            className={styles.entry__btn}
            onClick={deleteItemHandler}
          >
            <Close />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewEntry;
