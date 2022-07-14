import styles from "./EditProduct.module.scss";
import Header from "../header/Header";
import image from "../../../assets/images/product--1.jpg";
import Input from "../../UI/input/Input";
import { useState } from "react";
import { ReactComponent as Camera } from "../../../assets/svgs/icon-camera.svg";
// import Button from "../../UI/button/Button";

const EditProductComponent = function () {
  const [selectedFile, setSelectedFile] = useState();

  const fileUploadHandler = function (event) {
    setSelectedFile(event.target.files[0]);
    console.log(selectedFile);
  };

  return (
    <div className={styles.view}>
      <Header id={"WP-12346-csc"} directory='product' />
      <div className={styles.view__wrapper}>
        <div className={styles.view__content}>
          <div className={styles.view__main}>
            <div className={styles["view__image-box"]}>
              <img src={image} alt='product ' className={styles.view__image} />
            </div>
            <div className={styles.view__info}>
              <div className={styles.view__group}>
                <h3 className={styles.view__label}>Product name</h3>
                <h1 className={styles.view__title}>Classic white dress</h1>
              </div>
              <div className={styles.view__group}>
                <h3 className={styles.view__label}>Product price</h3>
                <h1 className={styles.view__title}>NGN 50,000.00</h1>
              </div>
              <div className={styles.view__group}>
                <h3 className={styles.view__label}>Product Category</h3>
                <h1 className={styles.view__title}>Clothing</h1>
              </div>
              <div className={styles.view__group}>
                <h3 className={styles.view__label}>Quantity Available</h3>
                <h1 className={styles.view__title}>10</h1>
              </div>
              <div className={styles.view__group}>
                <h3 className={styles.view__label}>Discount</h3>
                <h1 className={styles.view__title}>10%</h1>
              </div>
            </div>
          </div>
          <div className={styles.view__extra}>
            <p className={styles.view__description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic earum
              aspernatur culpa delectus repellat sapiente dolor blanditiis,
              voluptatum, modi inventore cum alias odit natus, maiores nobis?
              Commodi harum ut modi veritatis autem iste cum aspernatur est
              consequuntur eligendi perferendis laboriosam dolores quisquam
              architecto at tempore, sint voluptatem repellat nam doloremque.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
              saepe animi dicta nobis odit tempore ratione dignissimos ullam,
              reprehenderit ad consequatur voluptatibus sequi incidunt, iste,
              libero dolorum sunt ipsam consequuntur. Est asperiores, sit
              officiis vitae ullam nihil fugit molestias quasi recusandae a
              adipisci unde id distinctio consequuntur cupiditate vero ut.
            </p>
          </div>
        </div>
        <div className={styles.view__form}>
          <form action='' className={styles.form}>
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
                  {selectedFile ? selectedFile.name : "Add new product image"}
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
                type='number'
                className={styles.form__input}
                placeholder='Product price'
              />
            </div>
            <div className={styles.form__group}>
              <label htmlFor='product-quantity' className={styles.form__label}>
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
              <label htmlFor='product-category' className={styles.form__label}>
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
                type='number'
                className={styles.form__input}
                placeholder='Discount'
              />
            </div>
            <div
              className={`${styles.form__group} ${styles["form__group--lg"]}`}
            >
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProductComponent;
