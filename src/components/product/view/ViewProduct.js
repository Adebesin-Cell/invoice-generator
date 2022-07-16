import { useParams } from "react-router-dom";
import Header from "../../create/header/Header";
import styles from "./ViewProduct.module.scss";

const ViewProduct = function () {
  const { productid } = useParams();

  return (
    <div className={styles.view}>
      <Header directory='product' id={productid} />
      <div className={styles.view__wrapper}>
        <div className={styles.view__content}>&nbsp;</div>
      </div>
    </div>
  );
};

export default ViewProduct;
