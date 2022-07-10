import styles from "./ProductList.module.scss";
import Card from "../../../utils/card/Card";
import { Link } from "react-router-dom";
import "../../../styles/shadows.scss";

const ProductList = function (props) {
  console.log(props.data);
  return (
    <div className={styles.product}>
      <ul className={styles.product__list}>
        {props.data.map((item) => (
          <li key={item.id} className={styles.product__item}>
            <Link to={`/products/${item.id}`} className={styles.product__link}>
              <Card className={`${styles.product__card} shadow shadow-xl`}>
                <div className={styles.product__imageBox}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className={styles.product__image}
                  />
                </div>
                <div className={styles.product__body}>&nbsp;</div>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
