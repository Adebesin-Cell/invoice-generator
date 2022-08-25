import Topbar from '../topbar/Topbar';
import styles from './CustomersList.module.scss';
import { Link } from 'react-router-dom';
import Button from '../UI/button/Button';
import * as Icon from 'react-feather';
import Modal from '../modal/Modal';
import { useState, useEffect } from 'react';

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
                    <th>Invoice No.</th>
                    <th>Customer</th>
                    <th>Customer Phone</th>
                    <th>Date of Invoice</th>
                    <th>Total Amount</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr onClick={(e) => showModalHandler(e)}>
                    <td>#1</td>
                    <td>2344</td>
                    <td>Tolulope Adebesin</td>
                    <td>08124333444</td>
                    <td>13, June, 2020</td>
                    <td>99000</td>
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
              </ul>
              <h1 className={styles.customer__heading}>
                <span className={styles.customer__text}>Invoice Details</span>
                <span className={styles.customer__icon}>
                  <Icon.Check />
                </span>
              </h1>
              <ul className={styles.customer__list}>
                <li className={styles.customer__item}>
                  <span className={styles.customer__key}>ID</span>
                  <span className={styles.customer__value}>#123939</span>
                </li>
                <li className={styles.customer__item}>
                  <span className={styles.customer__key}>Date:</span>
                  <span className={styles.customer__value}>4/8/22</span>
                </li>
                <li className={styles.customer__item}>
                  <span className={styles.customer__key}>Items:</span>
                </li>
              </ul>
              <table className={styles.customer__table}>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody className={styles.customer__tableBody}>
                  <tr>
                    <td>Shoes</td>
                    <td>3</td>
                    <td>3,000</td>
                  </tr>
                  <tr>
                    <td>Shoes</td>
                    <td>3</td>
                    <td>3,000</td>
                  </tr>
                  <tr>
                    <td>Shoes</td>
                    <td>3</td>
                    <td>3,000</td>
                  </tr>
                  <tr>
                    <td>Shoes</td>
                    <td>3</td>
                    <td>3,000</td>
                  </tr>
                  <tr>
                    <td>Shoes</td>
                    <td>3</td>
                    <td>3,000</td>
                  </tr>
                  <tr>
                    <td>Shoes</td>
                    <td>3</td>
                    <td>3,000</td>
                  </tr>
                  <tr>
                    <td>Shoes</td>
                    <td>3</td>
                    <td>3,000</td>
                  </tr>
                  <tr>
                    <td>Shoes</td>
                    <td>3</td>
                    <td>3,000</td>
                  </tr>
                  <tr>
                    <td>Shoes</td>
                    <td>3</td>
                    <td>3,000</td>
                  </tr>
                  <tr>
                    <td>Shoes</td>
                    <td>3</td>
                    <td>3,000</td>
                  </tr>
                  <tr>
                    <td>Shoes</td>
                    <td>3</td>
                    <td>3,000</td>
                  </tr>
                  <tr>
                    <td>Shoes</td>
                    <td>3</td>
                    <td>3,000</td>
                  </tr>
                  <tr>
                    <td>Shoes</td>
                    <td>3</td>
                    <td>3,000</td>
                  </tr>
                  <tr>
                    <td>Shoes</td>
                    <td>3</td>
                    <td>3,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default CustomersList;
