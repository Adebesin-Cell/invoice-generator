import styles from './SalesReport.module.scss';
import Topbar from '../topbar/Topbar';
import Card from '../../utils/card/Card';
import Button from '../UI/button/Button';
import * as Icon from 'react-feather';
import Modal from '../modal/Modal';
import { useState, useEffect } from 'react';

const SalesReport = function () {
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
      <div className={styles.view}>
        <Topbar title='Sales Report' />
        <div className={styles.view__container}>
          <div className={styles.view__overview}>
            <Card
              className={`${styles.view__card} ${styles['view__card--blue']}`}
            >
              <h3 className={styles.view__title}>Total Sales</h3>
              <h1 className={styles.view__figure}>1,008,000</h1>
            </Card>
            <Card
              className={`${styles.view__card} ${styles['view__card--blue']}`}
            >
              <h3 className={styles.view__title}>Money Received</h3>
              <h1 className={styles.view__figure}>15,070</h1>
            </Card>
            <Card
              className={`${styles.view__card} ${styles['view__card--blue']}`}
            >
              <h3 className={styles.view__title}>Total Debt</h3>
              <h1 className={styles.view__figure}>15,070</h1>
            </Card>
          </div>
          <div className={styles.view__header}>
            <h1 className={styles.view__heading}>Sales Report History</h1>
            <Button className={styles.view__button}>Add Report</Button>
          </div>
          <div className={styles.view__tableWrapper}>
            <div className={styles.view__tableContainer}>
              <table className={styles.view__table}>
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
                    <td className={styles.view__tableAction}>
                      <Button
                        className={styles.view__tableEdit}
                        title='edit'
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Icon.Edit />
                      </Button>
                      <Button
                        className={styles.view__tableDelete}
                        title='delete'
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Icon.Trash2 />
                      </Button>
                    </td>
                  </tr>
                  <tr onClick={(e) => showModalHandler(e)}>
                    <td>#1</td>
                    <td>2344</td>
                    <td>Tolulope Adebesin</td>
                    <td>08124333444</td>
                    <td>13, June, 2020</td>
                    <td>99000</td>
                    <td className={styles.view__tableAction}>
                      <Button
                        className={styles.view__tableEdit}
                        title='edit'
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Icon.Edit />
                      </Button>
                      <Button
                        className={styles.view__tableDelete}
                        title='delete'
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Icon.Trash2 />
                      </Button>
                    </td>
                  </tr>
                  <tr onClick={(e) => showModalHandler(e)}>
                    <td>#1</td>
                    <td>2344</td>
                    <td>Tolulope Adebesin</td>
                    <td>08124333444</td>
                    <td>13, June, 2020</td>
                    <td>99000</td>
                    <td className={styles.view__tableAction}>
                      <Button
                        className={styles.view__tableEdit}
                        title='edit'
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Icon.Edit />
                      </Button>
                      <Button
                        className={styles.view__tableDelete}
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
          title='Invoice Details'
          onClose={hideModalHandler}
          className={styles.view__modal}
        >
          <div className={styles.report}>
            <div className={styles.report__body}>
              <h1 className={styles.report__heading}>Personal Details</h1>
              <ul className={styles.report__list}>
                <li className={styles.report__item}>
                  <span className={styles.report__key}>Full Name:</span>
                  <span className={styles.report__value}>Amode Habeeb</span>
                </li>
                <li className={styles.report__item}>
                  <span className={styles.report__key}>Email:</span>
                  <span className={styles.report__value}>
                    Amobeeb1net@gmail.com
                  </span>
                </li>
                <li className={styles.report__item}>
                  <span className={styles.report__key}>Phone:</span>
                  <span className={styles.report__value}>08129292929</span>
                </li>
                <li className={styles.report__item}>
                  <span className={styles.report__key}>City:</span>
                  <span className={styles.report__value}>Lagos</span>
                </li>
              </ul>
              <h1 className={styles.report__heading}>
                <span className={styles.report__text}>Invoice Details</span>
                <span className={styles.report__icon}>
                  <Icon.Check />
                </span>
              </h1>
              <ul className={styles.report__list}>
                <li className={styles.report__item}>
                  <span className={styles.report__key}>ID</span>
                  <span className={styles.report__value}>#123939</span>
                </li>
                <li className={styles.report__item}>
                  <span className={styles.report__key}>Date:</span>
                  <span className={styles.report__value}>4/8/22</span>
                </li>
                <li className={styles.report__item}>
                  <span className={styles.report__key}>Items:</span>
                </li>
              </ul>
              <table className={styles.report__table}>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody className={styles.report__tableBody}>
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

export default SalesReport;
