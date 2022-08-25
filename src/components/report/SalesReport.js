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

  const showModalHandler = function (id) {
    body.style.overflowY = 'hidden';
    setModalIsOpen(true);
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
                  <tr>
                    <td>#1</td>
                    <td>2344</td>
                    <td>Tolulope Adebesin</td>
                    <td>08124333444</td>
                    <td>13, June, 2020</td>
                    <td>99000</td>
                    <td className={styles.view__tableAction}>
                      <Button
                        onClick={showModalHandler}
                        className={styles.view__tableEdit}
                        title='edit'
                      >
                        <Icon.Edit />
                      </Button>
                      <Button
                        className={styles.view__tableDelete}
                        title='delete'
                      >
                        <Icon.Trash2 />
                      </Button>
                    </td>
                  </tr>
                  <tr>
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
                        onClick={showModalHandler}
                      >
                        <Icon.Edit />
                      </Button>
                      <Button
                        className={styles.view__tableDelete}
                        title='delete'
                      >
                        <Icon.Trash2 />
                      </Button>
                    </td>
                  </tr>
                  <tr>
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
                        onClick={showModalHandler}
                      >
                        <Icon.Edit />
                      </Button>
                      <Button
                        className={styles.view__tableDelete}
                        title='delete'
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
          &nbsp;
        </Modal>
      )}
    </>
  );
};

export default SalesReport;
