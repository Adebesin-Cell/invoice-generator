import { useParams } from "react-router-dom";
import Header from "../../create/header/Header";
import { Link } from "react-router-dom";
import styles from "./ViewProduct.module.scss";
import image from "../../../assets/images/product--1.jpg";
import Button from "../../UI/button/Button";

const ViewProduct = function () {
  const { productid } = useParams();

  return (
    <div className={styles.view}>
      <Header site='View' directory='product' id={productid} />
      <div className={styles.view__wrapper}>
        <div className={styles.view__content}>
          <div className={styles.view__header}>
            <div className={styles["view__image--box"]}>
              <img src={image} alt='product' className={styles.view__image} />
            </div>
            <div className={styles.view__info}>
              <h1 className={styles.view__title}>Classic white dress</h1>
              <p className={styles.view__price}>₦50,000.00</p>
              <ul className={styles.view__categories}>
                <li className={styles.view__category}>Clothing</li>
                <li className={styles.view__category}>Accessories</li>
              </ul>
              <div className={styles.view__quantity}>
                <h1 className={styles.view__max}>x35</h1>
              </div>
            </div>
          </div>
          <div className={styles.view__body}>
            <p className={styles.view__bodyText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit in
              ex optio placeat quia quidem aliquid, vero exercitationem id
              commodi molestiae illo tempore quod. Sapiente eum eveniet quisquam
              suscipit ratione. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Asperiores qui aut voluptatum consectetur
              praesentium, commodi voluptatibus laudantium hic, alias aliquam
              dicta possimus iure minima magnam?
            </p>
          </div>
          <div className={styles.view__action}>
            <Link to='/products/edit/1' className={styles.view__btn}>
              Edit
            </Link>
            <Button
              name='delete'
              type='button'
              className={`${styles.view__btn} ${styles["view__btn--red"]}`}
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
