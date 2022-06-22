import Card from "../../utils/card/Card";
import overlay from "../../assets/images/overlay.png";
import styles from "./Dashboard.module.scss";
import { ReactComponent as Help } from "../../assets/svgs/icon-help.svg";
import { ReactComponent as External } from "../../assets/svgs/icon-open-outline.svg";
import { Statistics } from "../../data/Data";

const DashboardView = function (props) {
  return (
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
          <div className={styles.view__products}>&nbsp;</div>
          <div className={styles.statistics}>
            <Card>
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
                        <p className={styles.statistics__name}>{stat.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
        <div className={styles.view__help}>
          <span className={styles["view__help--icon"]}>
            <Help />
          </span>
        </div>
      </div>
    </main>
  );
};

export default DashboardView;
