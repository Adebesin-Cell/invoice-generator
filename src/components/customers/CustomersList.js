import Topbar from '../topbar/Topbar';
import styles from './CustomersList.module.scss';
import Button from '../UI/button/Button';
import * as Icon from 'react-feather';
import Modal from '../modal/Modal';
import { useState, useEffect } from 'react';
import { RecentSales } from '../../data/Data';
import { FormatDate } from '../../utils/formatDate/FormatDate';
import { FormatNumber } from '../../utils/formatNumber/FormatNumber';

const CustomersList = function () {
  const [body, setBody] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const showModalHandler = function (e) {
    body.style.overflowY = 'hidden';
    setModalIsOpen(true);
    e.stopPropagation();
  };

  const hideModalHandler = function () {
    body.style.overflowY = 'initial';
    setModalIsOpen(false);
  };

  useEffect(() => {
    setBody(document.querySelector('body'));
  }, []);

  return (
    <>
      <div className={styles.customers}>
        <Topbar title='Customers' />
        <div className={styles.customers__container}>
          <div className={styles.customers__header}>
            <h1 className={styles.customers__heading}>Customers History</h1>
            <Button className={styles.customers__button}>Add Customer</Button>
          </div>
          <div className={styles.customers__tableWrapper}>
            <div className={styles.customers__tableContainer}>
              <table className={styles.customers__table}>
                <thead>
                  <tr>
                    <th>S/N</th>
                    <th>Full Name</th>
                    <th>Customer Phone</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>Last Transaction</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr onClick={(e) => showModalHandler(e)}>
                    <td>#1</td>
                    <td>Tolulope Ade</td>
                    <td>08124333444</td>
                    <td>tolu@gmail.com</td>
                    <td>Lagos</td>
                    <td>#29292</td>
                    <td className={styles.customers__tableAction}>
                      <Button
                        className={styles.customers__tableEdit}
                        title='edit'
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Icon.Edit />
                      </Button>
                      <Button
                        className={styles.customers__tableDelete}
                        title='delete'
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Icon.Trash2 />
                      </Button>
                    </td>
                  </tr>
                  <tr onClick={(e) => showModalHandler(e)}>
                    <td>#1</td>
                    <td>Tolulope Ade</td>
                    <td>08124333444</td>
                    <td>tolu@gmail.com</td>
                    <td>Lagos</td>
                    <td>#29292</td>
                    <td className={styles.customers__tableAction}>
                      <Button
                        className={styles.customers__tableEdit}
                        title='edit'
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Icon.Edit />
                      </Button>
                      <Button
                        className={styles.customers__tableDelete}
                        title='delete'
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Icon.Trash2 />
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {modalIsOpen && (
        <Modal
          title='Customers Details'
          onClose={hideModalHandler}
          className={styles.customers__modal}
        >
          <div className={styles.customer}>
            <div className={styles.customer__body}>
              <h1 className={styles.customer__heading}>Personal Details</h1>
              <ul className={styles.customer__list}>
                <li className={styles.customer__item}>
                  <span className={styles.customer__key}>Full Name:</span>
                  <span className={styles.customer__value}>Amode Habeeb</span>
                </li>
                <li className={styles.customer__item}>
                  <span className={styles.customer__key}>Email:</span>
                  <span className={styles.customer__value}>
                    Amobeeb1net@gmail.com
                  </span>
                </li>
                <li className={styles.customer__item}>
                  <span className={styles.customer__key}>Phone:</span>
                  <span className={styles.customer__value}>08129292929</span>
                </li>
                <li className={styles.customer__item}>
                  <span className={styles.customer__key}>City:</span>
                  <span className={styles.customer__value}>Lagos</span>
                </li>
                <li className={styles.customer__item}>
                  <span className={styles.customer__key}>Address 1:</span>
                  <span className={styles.customer__value}>&nbsp;</span>
                </li>
                <li className={styles.customer__item}>
                  <span className={styles.customer__key}>Address 2:</span>
                  <span className={styles.customer__value}>&nbsp;</span>
                </li>
              </ul>
              <h1 className={styles.customer__heading}>
                <span className={styles.customer__text}>
                  Transaction Summary
                </span>
              </h1>
              <ul className={styles.transaction__list}>
                {RecentSales.map((product) => (
                  <li className={styles.transaction__item}>
                    <span
                      className={`${styles.transaction__icon} ${
                        product.hasPaid
                          ? styles['transaction__icon--success']
                          : styles['transaction__icon--failed']
                      }`}
                    >
                      <Icon.Check />
                    </span>
                    <div className={styles.transaction__info}>
                      <h1 className={styles.transaction__title}>
                        <span className={styles.transaction__id}>
                          {product.sales_id}
                        </span>
                        <span className={styles.transaction__date}>
                          <FormatDate
                            locale='en-US'
                            date={product.sales_date}
                          />
                        </span>
                      </h1>
                      <h1 className={styles.transaction__name}>
                        {product.sales_by}
                      </h1>
                    </div>
                    <div className={styles.transaction__details}>
                      <h1 className={styles.transaction__price}>
                        <FormatNumber
                          type='currency'
                          amount={product.sales_cost}
                          currency={product.currency}
                          locale='en-US'
                        />
                      </h1>
                      <p
                        className={`${styles.transaction__progress} ${
                          product.hasPaid
                            ? styles['transaction__paid']
                            : styles['transaction__not-paid']
                        }`}
                      >
                        {product.hasPaid ? 'Paid' : 'Not Paid'}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default CustomersList;
