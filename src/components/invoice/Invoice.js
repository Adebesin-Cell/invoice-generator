import { Link } from 'react-router-dom';
import styles from './Invoice.module.scss';
import { ReactComponent as Add } from '../../assets/svgs/icon-add.svg';
import Topbar from '../topbar/Topbar';

const InvoiceView = function () {
  return (
    <>
      <div className={styles.invoice}>
        <Topbar title='Invoice' />
        <div className={styles.invoice__add}>
          <Link
            to='add'
            className={styles['invoice__add--link']}
            title='Add Invoice'
          >
            <Add />
          </Link>
        </div>
      </div>
    </>
  );
};

export default InvoiceView;
