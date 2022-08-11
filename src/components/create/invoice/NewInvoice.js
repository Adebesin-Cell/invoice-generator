import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';
import styles from './NewInvoice.module.scss';
import Input from '../../UI/input/Input';
import NewEntry from './NewInvoiceEntry';
import { ReactComponent as Add } from '../../../assets/svgs/icon-add.svg';
import Button from '../../UI/button/Button';
import Sidebar from '../../sidebar/Sidebar';
import Topbar from '../../topbar/Topbar';

const NewInvoice = function () {
  const [items, setItems] = useState([
    {
      id: uuid(),
      title: '',
      description: '',
      quantity: '',
      price: '',
      amount: '',
    },
  ]);

  const navigate = useNavigate();

  const addNewItemHandler = function () {
    setItems((prevItems) => [
      ...prevItems,
      {
        id: uuid(),
        title: '',
        description: '',
        quantity: '',
        price: '',
        amount: '',
      },
    ]);
  };

  const deleteItemHandler = function (invoiceId) {
    setItems((prevInvoices) => {
      return prevInvoices.filter((invoice) => invoice.id !== invoiceId);
    });
  };

  const formSubmitHandler = function (e) {
    e.preventDefault();
    navigate('/preview/invoice', { replace: true });
  };

  return (
    <form action='' className={styles.form} onSubmit={formSubmitHandler}>
      <div className={styles.view}>
        <Sidebar />
        <main className={styles.view__intro}>
          <Topbar title='Invoice' />
          <section className={styles.invoice}>
            <h1 className={styles.invoice__heading}>Client Details</h1>
            <div className={styles.invoice__form}>
              <div className={styles.invoice__group}>
                <label
                  className={styles.invoice__label}
                  htmlFor='customer-name'
                >
                  Customer Name
                </label>
                <Input
                  className={styles.invoice__input}
                  placeholder='Customer Name'
                  type='text'
                  name='customer-name'
                  aria-label='customer-name'
                  role='customer-name input'
                ></Input>
              </div>
              <div className={styles.invoice__group}>
                <label
                  className={styles.invoice__label}
                  htmlFor='customer-email'
                >
                  Customer Email
                </label>
                <Input
                  className={styles.invoice__input}
                  placeholder='Customer Email'
                  type='text'
                  name='customer-email'
                  aria-label='customer-email'
                  role='customer-email input'
                ></Input>
              </div>
              <div className={styles.invoice__group}>
                <label
                  className={styles.invoice__label}
                  htmlFor='customer-phone'
                >
                  Customer Phone
                </label>
                <Input
                  className={styles.invoice__input}
                  placeholder='Customer Phone'
                  type='text'
                  name='customer-phone'
                  aria-label='customer-phone'
                  role='customer-phone input'
                ></Input>
              </div>
              <div className={styles.invoice__group}>
                <label
                  className={styles.invoice__label}
                  htmlFor='customer-city'
                >
                  Customer City
                </label>
                <Input
                  className={styles.invoice__input}
                  placeholder='Customer City'
                  type='text'
                  name='customer-city'
                  aria-label='customer-city'
                  role='customer-city input'
                ></Input>
              </div>
              <div className={styles.invoice__group}>
                <label
                  className={styles.invoice__label}
                  htmlFor='customer-address-1'
                >
                  Customer Address 1
                </label>
                <Input
                  className={styles.invoice__input}
                  placeholder='Customer Address 1'
                  type='text'
                  name='customer-address-1'
                  aria-label='customer-address-1'
                  role='customer-address-1 input'
                ></Input>
              </div>
              <div className={styles.invoice__group}>
                <label
                  className={styles.invoice__label}
                  htmlFor='customer-address-2'
                >
                  Customer Address 2
                </label>
                <Input
                  className={styles.invoice__input}
                  placeholder='Customer Address 2'
                  type='text'
                  name='customer-address-2'
                  aria-label='customer-address-2'
                  role='customer-address-2 input'
                ></Input>
              </div>
            </div>
            <h1 className={styles.invoice__heading}>Items and Pricing</h1>
            <div className={styles.invoice__bill}>
              {items.map((item) => (
                <NewEntry
                  key={item.id}
                  {...item}
                  onDelete={deleteItemHandler}
                ></NewEntry>
              ))}
            </div>
            <div className={styles.add}>
              <Button
                className={styles.add__btn}
                type='button'
                onClick={addNewItemHandler}
              >
                <span className={styles.add__icon}>
                  <Add />
                </span>
                <p className={styles.add__text}>Add Row</p>
              </Button>
            </div>
            <div className={styles.invoice__footer}>
              <Button
                className={styles.invoice__button}
                type='submit'
                role='submit'
              >
                Save
              </Button>
            </div>
          </section>
        </main>
      </div>
    </form>
  );
};

export default NewInvoice;
