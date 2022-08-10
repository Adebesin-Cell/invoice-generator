import Topbar from '../topbar/Topbar';
import styles from './Dashboard.module.scss';
import Card from '../../utils/card/Card';
import { Link } from 'react-router-dom';
import { RecentProducts, RecentSales } from '../../data/Data';
import * as Icon from 'react-feather';
import { FormatDate } from '../../utils/formatDate/FormatDate';
import { FormatNumber } from '../../utils/formatNumber/FormatNumber';

const DashboardView = function () {
  return (
    <>
      <div className={styles.view}>
        <Topbar title='Dashboard' />
        <div className={styles.view__intro}>
          <Card className={`${styles.card} ${styles['card--blue']}`}>
            <div className={styles.card__body}>
              <div className={styles.card__left}>
                <h3 className={styles.card__title}>Total Sales</h3>
                <h1 className={styles.card__heading}>N10,039,000</h1>
                <p className={styles.card__paragraph}>
                  20% sales increase this month
                </p>
              </div>
              <div className={styles.card__right}>
                <div className={styles.card__box}>
                  <div className={styles.card__info}>
                    <h3 className={styles.card__title__small}>Week Sales</h3>
                    <h1 className={styles.card__heading__small}>300,600</h1>
                  </div>
                  <div className={styles.card__info}>
                    <h3 className={styles.card__title__small}>Monthly Sales</h3>
                    <h1 className={styles.card__heading__small}>800,600</h1>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          <Card className={`${styles.card} ${styles['card--blue']}`}>
            <div className={styles.card__body}>
              <div className={styles.card__left}>
                <h3 className={styles.card__title}>Products</h3>
                <h1 className={styles.card__heading}>15,070</h1>
              </div>
              <div className={styles.card__right}>
                <div className={styles.card__box}>
                  <div className={styles.card__info}>
                    <h3 className={styles.card__title__small}>
                      Available Products
                    </h3>
                    <h1 className={styles.card__heading__small}>1,500</h1>
                  </div>
                  <div className={styles.card__info}>
                    <h3 className={styles.card__title__small}>
                      Out of stock Products
                    </h3>
                    <h1 className={styles.card__heading__small}>499</h1>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div className={styles.view__container}>
          <div className={styles.products}>
            <div className={styles.products__header}>
              <h1 className={styles.products__heading}>Recent Products</h1>
              <Link
                to='/products'
                name='View all Products'
                className={styles.products__link}
              >
                View More
              </Link>
            </div>
            <div className={styles.products__list}>
              {RecentProducts.map((product) => (
                <div className={styles.products__item} key={product.id}>
                  <span className={styles.products__tag}>
                    {product.quantity}
                  </span>
                  <div className={styles.products__overlay}>
                    <div className={styles.product__details}>
                      <h1 className={styles.products__title}>
                        {product.title}
                      </h1>
                      <h1 className={styles.products__price}>
                        <FormatNumber
                          type='currency'
                          amount={product.price}
                          currency={product.currency}
                          locale='en-US'
                        />
                      </h1>
                    </div>
                  </div>
                  <div className={styles['products__image-box']}>
                    <img
                      src={product.image}
                      alt={product.title}
                      className={styles.products__image}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.sales}>
            <div className={styles.sales__header}>
              <h1 className={styles.sales__heading}>Recent sales</h1>
              <Link
                to='/sales'
                name='View all sales'
                className={styles.sales__link}
              >
                View More
              </Link>
            </div>
            <ul className={styles.sales__list}>
              {RecentSales.map((product) => (
                <li key={product.id} className={styles.sales__item}>
                  <div
                    className={`${styles.sales__status} ${
                      product.hasPaid
                        ? styles['sales__status--successful']
                        : styles['sales__status--failed']
                    }`}
                  >
                    <Icon.Check />
                  </div>
                  <div className={styles.sales__info}>
                    <h1 className={styles.sales__title}>
                      <span className={styles.sales__id}>
                        {product.sales_id}
                      </span>
                      <span className={styles.sales__date}>
                        <FormatDate locale='en-US' date={product.sales_date} />
                      </span>
                    </h1>
                    <h1 className={styles.sales__name}>{product.sales_by}</h1>
                  </div>
                  <div className={styles.sales__details}>
                    <h1 className={styles.sales__price}>
                      <FormatNumber
                        type='currency'
                        amount={product.sales_cost}
                        currency={product.currency}
                        locale='en-US'
                      />
                    </h1>
                    <p
                      className={`${styles.sales__progress} ${
                        product.hasPaid
                          ? styles['sales__paid']
                          : styles['sales__not-paid']
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
      </div>
    </>
  );
};

export default DashboardView;
