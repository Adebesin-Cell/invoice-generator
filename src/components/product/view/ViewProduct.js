import { useParams } from "react-router-dom";
import Header from "../../create/header/Header";
import styles from "./ViewProduct.module.scss";
import image from "../../../assets/images/product--1.jpg";

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
              <ul className={styles.view__categories}>&nbsp;</ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
