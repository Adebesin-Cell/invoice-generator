import Sidebar from "../components/sidebar/Sidebar";
import styles from "../styles/Products.module.scss";

const Products = function () {
  return (
    <div className='products'>
      <div className={styles.products}>
        <Sidebar />
      </div>
    </div>
  );
};

export default Products;
