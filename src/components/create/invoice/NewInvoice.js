import { useState } from "react";
import { useNavigate } from "react-router-dom";
import uuid from "react-uuid";
import styles from "./NewInvoice.module.scss";
import Header from "../header/Header";
import Input from "../../UI/input/Input";
import NewEntry from "./NewInvoiceEntry";
import { ReactComponent as Add } from "../../../assets/svgs/icon-add.svg";
import Button from "../../UI/button/Button";

const NewInvoice = function () {
  const [items, setItems] = useState([
    {
      id: uuid(),
      title: "",
      description: "",
      quantity: "",
      price: "",
      amount: "",
    },
  ]);

  const navigate = useNavigate();

  const addNewItemHandler = function () {
    setItems((prevItems) => [
      ...prevItems,
      {
        id: uuid(),
        title: "",
        description: "",
        quantity: "",
        price: "",
        amount: "",
      },
    ]);
  };

  const deleteItemHandler = function (invoiceId) {
    setItems((prevInvoices) => {
      const updatedInvoices = prevInvoices.filter(
        (invoice) => invoice.id !== invoiceId
      );
      return updatedInvoices;
    });
  };

  const formSubmitHandler = function (e) {
    e.preventDefault();
    navigate("/preview/invoice", { replace: true });
  };

  return (
    <form action='' className={styles.form} onSubmit={formSubmitHandler}>
      <div className={styles.view}>
        <Header id={"WP-12346-csc"} directory='invoice' />
        <main className={styles.view__intro}>
          <div className={styles.view__section}>
            <h1 className={styles.view__heading}>Invoice Generator</h1>
          </div>
          <section className={styles.invoice}>
            <div
              className={`${styles.invoice__header} ${styles.invoice__space}`}
            >
              <h1 className={styles.invoice__heading}>
                Enter customer and invoice information
              </h1>
              <div className={styles.progress}>
                <p className={styles.progress__paragraph}>Step 1 of 2</p>
                <ul className={styles.progress__dots}>
                  <li
                    className={`${styles.progress__dot} ${styles["progress__dot--active"]}`}
                  >
                    &nbsp;
                  </li>
                  <li className={`${styles.progress__dot}`}>&nbsp;</li>
                </ul>
              </div>
            </div>
            <div className={styles.invoice__body}>
              <div className={styles.invoice__form}>
                <div className={styles["invoice__group--xsm"]}>
                  <Input
                    type='text'
                    className={styles.invoice__input}
                    placeholder={`Your Customer's name`}
                    name={`Your Customer's name`}
                    aria-label={`Your Customer's name`}
                    role='Invoice input'
                  />
                  <Input
                    type='email'
                    className={styles.invoice__input}
                    placeholder={`Your Customer's email`}
                    name={`Your Customer's email`}
                    aria-label={`Your Customer's email`}
                    role='Invoice input'
                  />
                  <div className={styles.invoice__group}>
                    <span className={styles.invoice__label}>Invoice date</span>
                    <Input
                      type='date'
                      className={styles.invoice__input}
                      placeholder='2022-07-01'
                      name='Invoice date'
                      value='2022-07-01'
                      aria-label='Invoice date'
                      role='Invoice input'
                      onChange={() => console.log("changed")}
                    />
                  </div>
                  <Input
                    type='text'
                    className={`${styles.invoice__input}`}
                    placeholder={`Customer's address`}
                    name={`Customer's address`}
                    aria-label={`Customer's address`}
                    role='Invoice input'
                  />
                  <Input
                    type='text'
                    className={styles.invoice__input}
                    placeholder='City'
                    name='City'
                    aria-label='City'
                    role='Invoice input'
                  />
                </div>
              </div>
            </div>
            <div
              className={`${styles.invoice__header} ${styles.invoice__space}`}
            >
              <h1 className={styles.invoice__heading}>
                Enter the items you wish to bill
              </h1>
              <div className={styles.progress}>
                <p className={styles.progress__paragraph}>Step 2 of 2</p>
                <ul className={styles.progress__dots}>
                  <li
                    className={`${styles.progress__dot} ${styles["progress__dot--active"]}`}
                  >
                    &nbsp;
                  </li>
                  <li
                    className={`${styles.progress__dot} ${styles["progress__dot--active"]}`}
                  >
                    &nbsp;
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.invoice__bill}>
              {items.map((item) => (
                <NewEntry
                  key={item.id}
                  {...item}
                  onDelete={deleteItemHandler}
                ></NewEntry>
              ))}
            </div>
            <div className={styles.add}>
              <Button
                className={styles.add__btn}
                type='button'
                onClick={addNewItemHandler}
              >
                <span className={styles.add__icon}>
                  <Add />
                </span>
                <p className={styles.add__text}>Add a line item</p>
              </Button>
            </div>
            <div className={styles.invoice__footer}>
              <div className={styles.invoice__box}>
                <label
                  htmlFor='notes'
                  className={styles["invoice__label--footer"]}
                >
                  Notes / Memo
                </label>
                <textarea
                  name='notes'
                  id='notes'
                  cols='30'
                  rows='10'
                  className={`${styles.invoice__textarea} ${styles.invoice__input}`}
                ></textarea>
              </div>
              <div className={styles.invoice__box}>
                <Button
                  type='submit'
                  className={styles.invoice__btn}
                  role='submit'
                >
                  Submit
                </Button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </form>
  );
};

export default NewInvoice;
