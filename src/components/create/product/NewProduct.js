import styles from "./NewProduct.module.scss";
import Header from "../header/Header";
import Input from "../../UI/input/Input";
import { useState } from "react";
import { ReactComponent as Camera } from "../../../assets/svgs/icon-camera.svg";
import Button from "../../UI/button/Button";

const NewProduct = function (props) {
  const [selectedFile, setSelectedFile] = useState();

  const fileUploadHandler = function (event) {
    setSelectedFile(event.target.files[0]);
    console.log(selectedFile);
  };

  return (
    <div className={styles.product}>
      <Header id='WP-12346-csc' directory='product' />
      <main className={styles.product__intro}>
        <div className={styles.product__section}>
          <h1 className={styles.product__heading}>Add Product</h1>
          <form action='' className={styles.form}>
            <div className={styles.form__wrapper}>
              <div className={styles.form__group}>
                <span className={styles.form__label}>Product Image</span>
                <Input
                  id='product-image'
                  name='file'
                  type='file'
                  accept='image/*'
                  className={styles.form__upload}
                  onChange={fileUploadHandler}
                />
                <label
                  htmlFor='product-image'
                  className={styles.form__customLabel}
                >
                  <div className={styles.form__icon}>
                    <Camera />
                  </div>
                  <p className={styles.form__text}>
                    {selectedFile ? selectedFile.name : "Upload product image"}
                  </p>
                </label>
              </div>
              <div className={styles.form__group}>
                <label htmlFor='product-name' className={styles.form__label}>
                  Product Name
                </label>
                <Input
                  id='product-name'
                  name='product-name'
                  type='text'
                  className={styles.form__input}
                  placeholder='Product Name'
                />
              </div>
              <div className={styles.form__group}>
                <label htmlFor='product-name' className={styles.form__label}>
                  Product Price (NGN)
                </label>
                <Input
                  id='product-price'
                  name='product-price'
                  type='text'
                  className={styles.form__input}
                  placeholder='Product price'
                />
              </div>
              <div className={styles.form__group}>
                <label
                  htmlFor='product-quantity'
                  className={styles.form__label}
                >
                  Quantity Available
                </label>
                <Input
                  id='product-quantity'
                  name='product-quantity'
                  type='number'
                  className={styles.form__input}
                  placeholder='Quantity Available'
                  step='1'
                  min='1'
                />
              </div>
              <div className={styles.form__group}>
                <label
                  htmlFor='product-category'
                  className={styles.form__label}
                >
                  Product Category
                </label>
                <Input
                  id='product-category'
                  name='product-category'
                  type='text'
                  className={styles.form__input}
                  placeholder='Product Category'
                />
              </div>
              <div className={styles.form__group}>
                <label htmlFor='discount' className={styles.form__label}>
                  Discount
                </label>
                <Input
                  id='discount'
                  name='product-discount'
                  type='text'
                  className={styles.form__input}
                  placeholder='Discount'
                />
              </div>
              <div className={styles.form__group}>
                <label
                  htmlFor='product-description'
                  className={styles.form__label}
                >
                  Product Description
                </label>
                <textarea
                  name='product-description'
                  id='product-description'
                  cols='30'
                  rows='10'
                  className={styles.form__textarea}
                  placeholder='Product Description'
                ></textarea>
              </div>
            </div>
            <div className={styles.form__buttonContainer}>
              <Button type='submit' className={styles.form__button}>
                Create
              </Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default NewProduct;
