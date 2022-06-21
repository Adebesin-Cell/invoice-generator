import Card from "../../utils/card/Card";
import overlay from "../../assets/images/overlay.png";
import styles from "./Dashboard.module.scss";
import { ReactComponent as Help } from "../../assets/svgs/icon-help.svg";
import { ReactComponent as Documentation } from "../../assets/svgs/icon-information.svg";
import { ReactComponent as Play } from "../../assets/svgs/icon-play.svg";
import { ReactComponent as Apps } from "../../assets/svgs/icon-apps.svg";

const Externals = [
  {
    id: 1,
    title: "Documentation",
    link: "/",
    icon: <Documentation />,
    outerBg: "#f0f0ff",
    innerBg: "#4945ff",
    description: "Discover the essential concepts, guides and instructions.",
  },
  {
    id: 2,
    title: "Tutorial",
    link: "/",
    icon: <Play />,
    outerBg: "#f1f5f9",
    innerBg: "#054232",
    description: "Follow step-by-step instructions to use and customize Bizz.",
  },

  {
    id: 3,
    title: "Blog",
    icon: <Apps />,
    link: "/",
    outerBg: "#ffefb9",
    innerBg: "#faa11e",
    description: "Read the latest news about Bizz and the market.",
  },
];

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
        </div>
        <div className={styles.view__wrapper}>
          <div className={styles.view__external}>
            <ul className={styles.view__list}>
              {Externals.map((external) => (
                <li key={external.id} className={styles.view__item}>
                  <a
                    name={external.title}
                    href={external.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={styles.view__link}
                  >
                    <Card>
                      <div className={styles.view__box}>
                        <div
                          className={styles.view__icon}
                          style={{ backgroundColor: external.outerBg }}
                        >
                          <div
                            className={styles["view__icon--box"]}
                            style={{ backgroundColor: external.innerBg }}
                          >
                            {external.icon}
                          </div>
                        </div>
                        <div className={styles.view__details}>
                          <h1 className={styles.view__header}>
                            {external.title}
                          </h1>
                          <p className={styles.view__text}>
                            {external.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </a>
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
  );
};

export default DashboardView;
