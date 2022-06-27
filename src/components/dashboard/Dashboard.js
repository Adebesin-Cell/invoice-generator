// import { useState } from "react";
import { NavLink } from "react-router-dom";
import Card from "../../utils/card/Card";
// import Button from "../UI/button/Button";
import overlay from "../../assets/images/overlay.png";
import styles from "./Dashboard.module.scss";
import "../../styles/shadows.scss";
import { ReactComponent as Help } from "../../assets/svgs/icon-help.svg";
import { ReactComponent as External } from "../../assets/svgs/icon-open-outline.svg";
import { ReactComponent as View } from "../../assets/svgs/icon-arrow-forward.svg";
// import { ReactComponent as Grid } from "../../assets/svgs/icon-grid.svg";
// import { ReactComponent as List } from "../../assets/svgs/icon-list.svg";
import { Statistics, Sales, ProductsList } from "../../data/Data";
import MobileDashboard from "./MobileDashboard";

const DashboardView = function (props) {
  // const [activeTab, setActiveTab] = useState("grid");
  // const [productArrangement, setProductArrangement] = useState("grid");

  // const changeProductArrangementHandler = function (e) {
  //   const { layout } = e.target.dataset;

  //   if (!layout) return;

  //   setActiveTab(layout);

  //   setProductArrangement(layout);
  // };

  return (
    <>
      {/* desktop view */}
      <main className={styles.view}>
        <div className={styles.view__overlay}>
          <img
            src={overlay}
            alt='overlay'
            className={styles["view__overlay-image"]}
          />
        </div>
        <div className={styles.view__container}>
          <div className={styles.view__intro}>
            <h1 className={styles.view__heading}>Welcome 👋</h1>
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
              <span className='text'>See more on the blog</span>
              <span className={styles["view__go--icon"]}>
                <External />
              </span>
            </a>
          </div>
          <div className={styles.view__wrapper}>
            <div className={styles.sales}>
              <Card className='shadow shadow-xl rounded--md'>
                <div className={styles.sales__container}>
                  <div className={styles.sales__header}>
                    <h1 className={styles.sales__heading}>Recent Sales</h1>
                    <NavLink className={styles.sales__link} to='/sales'>
                      <span className={styles.sales__text}>View All</span>
                      <span className={styles.sales__icon}>
                        <View />
                      </span>
                    </NavLink>
                  </div>
                  <div className={styles.sales__body}>
                    <ul className={styles.sales__list}>
                      {Sales.map((sale, i) => (
                        <li
                          key={i}
                          className={`${styles.sales__item} shadow .shadow-sm ring-slate-200 ring-1`}
                        >
                          <h3 className={styles.sales__title}>
                            <span>{sale.title}</span>
                            <span>x{sale.totalAmount}</span>
                          </h3>
                          <p className={styles.sales__order}>
                            {sale.orderNumber}
                          </p>
                          <p className={styles.sales__buyer}>{sale.buyer}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
            <div className={styles.statistics}>
              <Card className=''>
                <div className={styles.statistics__container}>
                  <h1 className={styles.statistics__heading}>Statistics</h1>
                  <p className={styles.statistics__paragraph}>
                    View your business statistics: your number of products, your
                    total sales, your customers, your total revenue.
                  </p>
                  <a
                    name='Testimonials'
                    href='/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className={styles.statistics__go}
                  >
                    <span className='text'>See our Testimonials</span>
                    <span className={styles["statistics__go--icon"]}>
                      <External />
                    </span>
                  </a>
                  <div className={styles.statistics__wrapper}>
                    {Statistics.map((stat) => (
                      <div key={stat.id} className={styles.statistics__box}>
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
                          <p className={styles.statistics__name}>
                            {stat.title}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
          <div className={styles.view__products}>
            <div className={styles.products}>
              <div className={styles.products__header}>
                <h1 className={styles.products__heading}>Recent Products</h1>
                {/* <div className={styles.products__arrangement}>
                <Button
                  dataset='grid'
                  className={`${styles.products__button} ${
                    activeTab === "grid"
                      ? styles["products__button--active"]
                      : ""
                  }`}
                  onClick={changeProductArrangementHandler}
                >
                  <Grid />
                </Button>
                <Button
                  dataset='linear'
                  className={`${styles.products__button}  ${
                    activeTab === "linear"
                      ? styles["products__button--active"]
                      : ""
                  }`}
                  onClick={changeProductArrangementHandler}
                >
                  <List />
                </Button>
              </div> */}
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
                      <ul className={styles.products__sizes}>
                        {product.sizesAvailable.map((item, i) => (
                          <li key={i} className={styles.products__size}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
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
