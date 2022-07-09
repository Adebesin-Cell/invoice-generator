import styles from "./ProductsEmpty.module.scss";
import { ReactComponent as EmptyIcon } from "../../../assets/svgs/icon-empty.svg";

const ProductsEmpty = function (props) {
  return (
    <div className={styles.empty}>
      <div className={styles.empty__icon}>
        <EmptyIcon />
      </div>
      <h1 className={styles.empty__heading}>Oh! It’s still empty</h1>
      <p className={styles.empty__paragraph}>
        You haven’t created any product yet!
      </p>
    </div>
  );
};

export default ProductsEmpty;
