import Topbar from '../topbar/Topbar';
import styles from './AddProductCategory.module.scss';

const AddProductCategory = function () {
  return (
    <div className={styles.view}>
      <Topbar title='Product Category' />
    </div>
  );
};

export default AddProductCategory;
