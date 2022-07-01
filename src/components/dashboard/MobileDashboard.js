import { Swiper, SwiperSlide } from "swiper/react";
import Header from "../header/Header";
import Card from "../../utils/card/Card";
import { Statistics, ProductsList, Sales } from "../../data/Data";
import { ReactComponent as External } from "../../assets/svgs/icon-open-outline.svg";
import { ReactComponent as Help } from "../../assets/svgs/icon-help.svg";
import "swiper/css";
import styles from "./MobileDashboard.module.scss";

const MobileDashboard = function (props) {
  return (
    <main className={styles.view}>
      <Header />
      <div className={styles.view__intro}>
        <h1 className={styles.view__heading}>Hi Lope👋</h1>
        <p className={styles.view__paragraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
          temporibus laboriosam quas nisi dolorem ducimus
        </p>
        <a
          name='your web store'
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
      <div className={styles.view__statistics}>
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
      </div>
      <div className={styles.view__products}>
        <div className={styles.products}>
          <h1 className={styles.products__heading}>Recent Products</h1>
          <div className={styles.products__wrapper}>
            <Swiper
              className={styles.products__swipe}
              spaceBetween={30}
              slidesPerView={"auto"}
            >
              {ProductsList.map((product) => (
                <SwiperSlide key={product.id}>
                  <Card className={styles.products__card}>
                    <div className={styles.products__box}>
                      <div className={styles["products__image-box"]}>
                        <img
                          src={product.image}
                          alt=''
                          className={styles.products__image}
                        />
                      </div>
                      <div className={styles.products__body}>
                        <h3 className={styles.products__title}>
                          {product.title}
                        </h3>
                        <h1 className={styles.products__price}>
                          {product.currency + product.price.toFixed(2)}
                        </h1>
                        <p className={styles.products__status}>
                          {product.status}
                        </p>
                      </div>
                    </div>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <div className={styles.view__sales}>
        <div className={styles.sales}>
          <h1 className={styles.sales__heading}>Recent Sales</h1>
          <div className={styles.sales__wrapper}>
            {Sales.map((sale, i) => (
              <Card key={i} className={styles.sales__card}>
                <div className={styles.sales__box}>
                  <div className={styles.sales__details}>
                    <h3 className={styles["sales__order-id"]}>
                      {sale.orderNumber}
                    </h3>
                    <h3 className={styles.sales__buyer}>{sale.buyer}</h3>
                  </div>
                  <div className={styles.sales__details}>
                    <h3 className={styles.sales__title}>{sale.title}</h3>
                    <h3 className={styles.sales__amount}>
                      x{sale.totalAmount}
                    </h3>
                  </div>
                  <div className={styles.sales__details}>
                    <h3 className={styles.sales__price}>
                      {sale.currency + sale.price}
                    </h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.view__help}>
        <span className={styles["view__help--icon"]}>
          <Help />
        </span>
      </div>
    </main>
  );
};

export default MobileDashboard;
