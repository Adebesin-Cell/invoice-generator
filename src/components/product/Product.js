import styles from "./Product.module.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Add } from "../../assets/svgs/icon-add.svg";
import ProductsEmpty from "./empty/ProductsEmpty";
import ProductList from "./productList/ProductList";
import { DUMMY_PRODUCTS } from "../../data/Data";
import Header from "../header/Header";

const ProductView = function (props) {
  const isProductsAvailable = true;

  return (
    <>
      <div className={styles.view}>
        <div className={styles.view__intro}>
          <h1 className={styles.view__heading}>Products</h1>
          <p className={styles.view__paragraph}>
            Add or view your Products here.
          </p>
        </div>
        <div className={styles.view__container}>
          {isProductsAvailable ? (
            <ProductList data={DUMMY_PRODUCTS} />
          ) : (
            <ProductsEmpty />
          )}
        </div>
        <div className={styles.view__add}>
          <Link to='add' className={styles["view__add--link"]}>
            <Add />
          </Link>
        </div>
      </div>
      {/* Mobile and Tablet view */}
      <div className={styles.mobile}>
        <Header />
        <div className={styles.product__mobileIntro}>
          <h1 className={styles.product__mobileHeading}>Hi Lope👋</h1>
          <p className={styles.product__mobileParagraph}>
            You can add or view your products here.
          </p>
        </div>
        <div className={styles.product__container}>
          <ProductsEmpty />
        </div>
        <div className={styles.product__add}>
          <Link to='add' className={styles["product__add--link"]}>
            <Add />
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductView;
