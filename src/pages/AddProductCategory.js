import AddProductCategory from '../components/product/AddProductCategory';
import Sidebar from '../components/sidebar/Sidebar';
import styles from '../styles/AddProductCategory.module.scss';

const AddProductCategoryPage = function () {
  return (
    <div className={styles.view}>
      <Sidebar />
      <AddProductCategory />
    </div>
  );
};

export default AddProductCategoryPage;
