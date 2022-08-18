import styles from './Product.module.scss';
import Topbar from '../topbar/Topbar';
import Card from '../../utils/card/Card';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../UI/button/Button';
import * as Icon from 'react-feather';
import image from '../../assets/images/product--3.jpg';
import { FormatNumber } from '../../utils/formatNumber/FormatNumber';

const ProductView = function () {
  const navigate = useNavigate();

  const gotoAddProductHandler = function () {
    navigate('/products/add');
  };

  return (
    <>
      <div className={styles.product}>
        <Topbar title='Products' />
        <div className={styles.product__container}>
          <div className={styles.product__overview}>
            <Card
              className={`${styles.product__card} ${styles['product__card--blue']}`}
            >
              <h3 className={styles.product__title}>Total products</h3>
              <h1 className={styles.product__figure}>900</h1>
            </Card>
            <Card
              className={`${styles.product__card} ${styles['product__card--blue']}`}
            >
              <h3 className={styles.product__title}>Total Products Sales</h3>
              <h1 className={styles.product__figure}>15,070</h1>
            </Card>
            <Card
              className={`${styles.product__card} ${styles['product__card--blue']}`}
            >
              <h3 className={styles.product__title}>Total Amount</h3>
              <h1 className={styles.product__figure}>15,070</h1>
            </Card>
          </div>
          <div className={styles.product__header}>
            <h1 className={styles.product__heading}>Recently Added Product</h1>
            <Button
              className={styles.product__button}
              onClick={gotoAddProductHandler}
            >
              Add product
            </Button>
          </div>
          <div className={styles.product__tableWrapper}>
            <div className={styles.product__tableContainer}>
              <table className={styles.product__table}>
                <thead>
                  <tr>
                    <th>S/N</th>
                    <th>Picture</th>
                    <th>Product Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Discount %</th>
                    <th>Quantity</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>#1</td>
                    <td>
                      <img
                        src={image}
                        alt=''
                        className={styles.product__image}
                      />
                    </td>
                    <td>Smart Watch</td>
                    <td>Gadgets</td>
                    <td>
                      <FormatNumber
                        amount={1000}
                        locale='en-US'
                        type='currency'
                        currency='NGN'
                      ></FormatNumber>
                    </td>
                    <td>30</td>
                    <td>990</td>
                    <td>
                      <div className={styles.product__tableAction}>
                        <Link
                          to='edit/:id'
                          className={styles.product__tableEdit}
                          title='edit'
                        >
                          <Icon.Edit />
                        </Link>
                        <Button
                          className={styles.product__tableDelete}
                          title='delete'
                        >
                          <Icon.Trash2 />
                        </Button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>#1</td>
                    <td>
                      <img
                        src={image}
                        alt=''
                        className={styles.product__image}
                      />
                    </td>
                    <td>Smart Watch</td>
                    <td>Gadgets</td>
                    <td>
                      <FormatNumber
                        amount={1000}
                        locale='en-US'
                        type='currency'
                        currency='NGN'
                      ></FormatNumber>
                    </td>
                    <td>30</td>
                    <td>990</td>
                    <td>
                      <div className={styles.product__tableAction}>
                        <Link
                          to='edit/:id'
                          className={styles.product__tableEdit}
                          title='edit'
                        >
                          <Icon.Edit />
                        </Link>
                        <Button
                          className={styles.product__tableDelete}
                          title='delete'
                        >
                          <Icon.Trash2 />
                        </Button>
                      </div>
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

export default ProductView;
