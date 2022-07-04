import { useState } from "react";
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

  return (
    <form action='' className={styles.form}>
      <div className={styles.view}>
        <Header />
        <main className={styles.view__intro}>
          <div className={styles.view__section}>
            <h1 className={styles.view__heading}>Fast and Easy Invoicing</h1>
            <p className={styles.view__paragraph}>
              <span>
                Bizz's online invoice generator makes your life easier when it
                comes to billing and collecting money.
              </span>
              <span>
                Simply fill in the required information and create an invoice on
                the spot. You can save, print or email it directly to your
                clients. The Bizz invoice maker uses a professional layout that
                includes all of the necessary details for clean, consistent, and
                accurate billing practices.
              </span>
            </p>
          </div>
          <section className={styles.invoice}>
            <div className={`${styles.invoice__header}`}>
              <h1 className={styles.invoice__heading}>
                Enter your business information
              </h1>
              <div className={styles.progress}>
                <p className={styles.progress__paragraph}>Step 1 of 3</p>
                <ul className={styles.progress__dots}>
                  <li
                    className={`${styles.progress__dot} ${styles["progress__dot--active"]}`}
                  >
                    &nbsp;
                  </li>
                  <li className={styles.progress__dot}>&nbsp;</li>
                  <li className={styles.progress__dot}>&nbsp;</li>
                </ul>
              </div>
            </div>
            <div className={styles.invoice__body}>
              <div className={styles.invoice__form}>
                <div className={styles["invoice__group--sm"]}>
                  <Input
                    type='text'
                    className={styles.invoice__input}
                    placeholder='Company Name'
                    name='Company Name'
                    aria-label='Company Name'
                    role='Invoice input'
                  />
                  <Input
                    type='email'
                    className={styles.invoice__input}
                    placeholder='Email address'
                    name='Email address'
                    aria-label='Email address'
                    role='Invoice input'
                  />
                </div>
                <div className={styles["invoice__group--lg"]}>
                  <Input
                    type='text'
                    className={styles.invoice__input}
                    placeholder='Address'
                    name='Address'
                    aria-label='Address'
                    role='Invoice input'
                  />
                </div>
                <div className={styles["invoice__group--sm"]}>
                  <Input
                    type='text'
                    className={styles.invoice__input}
                    placeholder='City'
                    name='City'
                    aria-label='City'
                    role='Invoice input'
                  />
                  <Input
                    type='text'
                    className={styles.invoice__input}
                    placeholder='Zip/postal code'
                    name='Zip/postal code'
                    aria-label='Zip/postal code'
                    role='Invoice input'
                  />
                </div>
              </div>
              <div className={styles.invoice__upload}>&nbsp;</div>
            </div>
            <div
              className={`${styles.invoice__header} ${styles.invoice__space}`}
            >
              <h1 className={styles.invoice__heading}>
                Enter customer and invoice information
              </h1>
              <div className={styles.progress}>
                <p className={styles.progress__paragraph}>Step 2 of 3</p>
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
                  <li className={styles.progress__dot}>&nbsp;</li>
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
                    <span className={styles.invoice__label}>
                      Invoice number
                    </span>
                    <Input
                      type='text'
                      className={styles.invoice__input}
                      placeholder='1'
                      name='Invoice number'
                      aria-label='Invoice number'
                      role='Invoice input'
                    />
                  </div>
                </div>
                <div className={styles["invoice__group--xsm"]}>
                  <Input
                    type='text'
                    className={`${styles.invoice__input} ${styles["invoice__input--lg"]}`}
                    placeholder={`Customer's address`}
                    name={`Customer's address`}
                    aria-label={`Customer's address`}
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
                </div>
                <div className={styles["invoice__group--xsm"]}>
                  <Input
                    type='text'
                    className={styles.invoice__input}
                    placeholder='City'
                    name='City'
                    aria-label='City'
                    role='Invoice input'
                  />
                  <Input
                    type='text'
                    className={styles.invoice__input}
                    placeholder='Zip/postal code'
                    name='Zip/postal code'
                    aria-label='Zip/postal code'
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
                <p className={styles.progress__paragraph}>Step 3 of 3</p>
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
          </section>
        </main>
      </div>
    </form>
  );
};

export default NewInvoice;
