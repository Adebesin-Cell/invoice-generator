import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Header from "../header/Header";
import styles from "./InvoiceTemplate.module.scss";
import InvoiceContent from "./InvoiceContent";
import MobileInvoiceTemplate from "./MobileInvoiceTemplate";

const InvoiceTemplate = function (props) {
  const componentRef = useRef();
  const mobileComponentRef = useRef();

  const HandlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Invoice",
  });

  const handlePrintMobile = useReactToPrint({
    content: () => mobileComponentRef.current,
    documentTitle: "Invoice",
  });

  return (
    <div className={styles.view}>
      <Header handlePrint={HandlePrint} mobilePrint={handlePrintMobile} />
      <InvoiceContent ref={componentRef}></InvoiceContent>
      <MobileInvoiceTemplate ref={mobileComponentRef} />
    </div>
  );
};

export default InvoiceTemplate;
