import styles from "../styles/AddProduct.module.scss";
import NewProduct from "../components/create/product/NewProduct";

const AddProduct = function (props) {
  return (
    <div className={styles.view}>
      <NewProduct />
    </div>
  );
};

export default AddProduct;
