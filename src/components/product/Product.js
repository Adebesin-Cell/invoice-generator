import styles from "./Product.module.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Add } from "../../assets/svgs/icon-add.svg";
import ProductsEmpty from "./empty/ProductsEmpty";
import ProductList from "./productList/ProductList";
import { DUMMY_PRODUCTS } from "../../data/Data";

const ProductView = function (props) {
  const isProductsAvailable = true;

  return (
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
  );
};

export default ProductView;
