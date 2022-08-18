import { useNavigate, Link } from 'react-router-dom';
import styles from './Invoice.module.scss';
import Topbar from '../topbar/Topbar';
import Card from '../../utils/card/Card';
import Button from '../UI/button/Button';
import * as Icon from 'react-feather';

const InvoiceView = function () {
  const navigate = useNavigate();

  const gotoAddInvoiceHandler = function () {
    navigate('/invoice/add');
  };

  return (
    <>
      <div className={styles.invoice}>
        <Topbar title='Invoice' />
        <div className={styles.invoice__container}>
          <div className={styles.invoice__overview}>
            <Card
              className={`${styles.invoice__card} ${styles['invoice__card--blue']}`}
            >
              <h3 className={styles.invoice__title}>Total Invoices</h3>
              <h1 className={styles.invoice__figure}>900</h1>
            </Card>
            <Card
              className={`${styles.invoice__card} ${styles['invoice__card--blue']}`}
            >
              <h3 className={styles.invoice__title}>Total Products Sales</h3>
              <h1 className={styles.invoice__figure}>15,070</h1>
            </Card>
            <Card
              className={`${styles.invoice__card} ${styles['invoice__card--blue']}`}
            >
              <h3 className={styles.invoice__title}>Total Amount</h3>
              <h1 className={styles.invoice__figure}>15,070</h1>
            </Card>
          </div>
          <div className={styles.invoice__header}>
            <h1 className={styles.invoice__heading}>Invoice History</h1>
            <Button
              className={styles.invoice__button}
              onClick={gotoAddInvoiceHandler}
            >
              Add Invoice
            </Button>
          </div>
          <div className={styles.invoice__tableWrapper}>
            <div className={styles.invoice__tableContainer}>
              <table className={styles.invoice__table}>
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
                    <td className={styles.invoice__tableAction}>
                      <Link
                        to='edit/:id'
                        className={styles.invoice__tableEdit}
                        title='edit'
                      >
                        <Icon.Edit />
                      </Link>
                      <Button
                        className={styles.invoice__tableDelete}
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
                    <td className={styles.invoice__tableAction}>
                      <Link
                        to='edit/:id'
                        className={styles.invoice__tableEdit}
                        title='edit'
                      >
                        <Icon.Edit />
                      </Link>
                      <Button
                        className={styles.invoice__tableDelete}
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
                    <td className={styles.invoice__tableAction}>
                      <Link
                        to='edit/:id'
                        className={styles.invoice__tableEdit}
                        title='edit'
                      >
                        <Icon.Edit />
                      </Link>
                      <Button
                        className={styles.invoice__tableDelete}
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
    </>
  );
};

export default InvoiceView;
