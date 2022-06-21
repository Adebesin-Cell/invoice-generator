import Card from "../../utils/card/Card";
import overlay from "../../assets/images/overlay.png";
import styles from "./Dashboard.module.scss";
import { ReactComponent as Help } from "../../assets/svgs/icon-help.svg";
import { ReactComponent as Documentation } from "../../assets/svgs/icon-information.svg";

const Externals = [
  {
    id: 1,
    title: "Documentation",
    link: "/",
    icon: <Documentation />,
    outerBg: "#f0f0ff",
    innerBg: "#4945ff",
    decription: "Discover the essential concepts, guides and instructions.",
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
          <div className={styles.view__wrapper}>
            <div className={styles.view__external}>
              <ul className={styles.view__list}>
                {Externals.map((external) => (
                  <li key={external.id} className={styles.view__item}>
                    <a href='/' className={styles.view__link}>
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
                        </div>
                      </Card>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
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
