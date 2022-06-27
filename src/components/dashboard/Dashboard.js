import Card from "../../utils/card/Card";
import styles from "./Dashboard.module.scss";
import "../../styles/shadows.scss";
import { ReactComponent as Help } from "../../assets/svgs/icon-help.svg";
import { ReactComponent as External } from "../../assets/svgs/icon-open-outline.svg";
import { Statistics, Sales, ProductsList } from "../../data/Data";
import MobileDashboard from "./MobileDashboard";

const DashboardView = function (props) {
  return (
    <>
      {/* desktop view */}
      <main className={styles.view}>
        <div className={styles.view__container}>
          <div className={styles.view__intro}>
            <h1 className={styles.view__heading}>Hi Lope👋</h1>
            <p className={styles.view__paragraph}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              temporibus laboriosam quas nisi dolorem ducimus, dolores pariatur
              qui numquam, illo ullam porro recusandae deserunt vel.
            </p>
            <a
              name='See our blog'
              href='/'
              target='_blank'
              rel='noopener noreferrer'
              className={styles.view__go}
            >
              <span className='text'>View your web store</span>
              <span className={styles["view__go--icon"]}>
                <External />
              </span>
            </a>
          </div>
          <div className={styles.statistics}>
            <h1 className={styles.statistics__heading}>Statistics</h1>
            <div className={styles.statistics__wrapper}>
              {Statistics.map((stat) => (
                <Card className={styles.statistics__card} key={stat.id}>
                  <div className={styles.statistics__box}>
                    <div
                      className={styles.statistics__icon}
                      style={{
                        backgroundColor: stat.background,
                        color: stat.color,
                      }}
                    >
                      {stat.icon}
                    </div>
                    <div className={styles.statistics__details}>
                      <h3 className={styles.statistics__title}>
                        {stat.amountinwords}
                      </h3>
                      <p className={styles.statistics__name}>{stat.title}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          <div className={styles.view__products}>
            <div className={styles.products}>
              <div className={styles.products__header}>
                <h1 className={styles.products__heading}>Recent Products</h1>
              </div>
              <ul
                className={`${styles.products__list} ${
                  styles[`products__list--grid`]
                }`}
              >
                {ProductsList.map((product) => (
                  <li
                    key={product.id}
                    className={`${
                      styles.products__item
                    } shadow shadow-xl rounded--md ${
                      styles[`products__item--grid`]
                    }`}
                  >
                    <div className={styles["products__image-box"]}>
                      <img
                        src={product.image}
                        alt={product.title}
                        className={styles.products__image}
                      />
                    </div>
                    <div className={styles.products__details}>
                      <div className={styles.products__info}>
                        <h2 className={styles.products__title}>
                          {product.title}
                        </h2>
                        <h3 className={styles.products__price}>
                          <span>{product.currency}</span>
                          <span>{product.price.toFixed(2)}</span>
                        </h3>
                      </div>
                      <p className={styles.products__status}>
                        {product.status}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={styles.sales}>
            <h1 className={styles.sales__heading}>Recent Sales</h1>
            <table className={styles.sales__table}>
              <thead className={styles["sales__table--head"]}>
                <tr className={styles["sales__table--row"]}>
                  <td className={styles["sales__table--definition"]}>S/N</td>
                  <td className={styles["sales__table--definition"]}>Title</td>
                  <td className={styles["sales__table--definition"]}>Name</td>
                  <td className={styles["sales__table--definition"]}>Price</td>
                  <td className={styles["sales__table--definition"]}>Amount</td>
                  <td className={styles["sales__table--definition"]}>
                    Order Number
                  </td>
                  {/* <td className={styles["sales__table--definition"]}>Date</td> */}
                </tr>
              </thead>
              <tbody className={styles["sales__table--body"]}>
                {Sales.map((sale, i) => (
                  <tr key={i} className={styles["sales__table--row--sm"]}>
                    <td className={styles["sales__table--definition--sm"]}>
                      {i}
                    </td>
                    <td className={styles["sales__table--definition--sm"]}>
                      {sale.title}
                    </td>
                    <td className={styles["sales__table--definition--sm"]}>
                      {sale.buyer}
                    </td>
                    <td className={styles["sales__table--definition--sm"]}>
                      {sale.currency + " " + sale.price}
                    </td>
                    <td className={styles["sales__table--definition--sm"]}>
                      {sale.totalAmount}
                    </td>
                    <td className={styles["sales__table--definition--sm"]}>
                      {sale.orderNumber}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className={styles.view__help}>
            <span className={styles["view__help--icon"]}>
              <Help />
            </span>
          </div>
        </div>
      </main>
      {/* mobile view */}
      <MobileDashboard />
    </>
  );
};

export default DashboardView;
