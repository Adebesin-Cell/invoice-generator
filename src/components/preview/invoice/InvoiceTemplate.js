import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Header from "../header/Header";
import styles from "./InvoiceTemplate.module.scss";
import InvoiceContent from "./InvoiceContent";

const InvoiceTemplate = function (props) {
  const componentRef = useRef();

  const HandlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Invoice",
  });

  return (
    <div className={styles.view}>
      <Header handlePrint={HandlePrint} />
      <InvoiceContent ref={componentRef}></InvoiceContent>
    </div>
  );
};

export default InvoiceTemplate;
