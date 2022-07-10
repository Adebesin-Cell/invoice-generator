import { Route, Routes, useLocation } from "react-router-dom";
import NavigationContext from "./store/navigation-context";
import {
  Dashboard,
  Login,
  Invoice,
  Report,
  Product,
  Order,
  Contact,
  NotFound,
  Register,
  NewInvoice,
  Preview,
  NewProduct,
} from "./pages";
import InvoiceTemplate from "./components/preview/invoice/InvoiceTemplate";

function App() {
  const { pathname } = useLocation();

  return (
    <NavigationContext.Provider
      value={{
        pathname: pathname,
      }}
    >
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/invoice' element={<Invoice />}></Route>
        <Route path='/invoice/add' element={<NewInvoice />}></Route>
        <Route path='/invoice/edit/:invoiceid' element={<NewInvoice />}></Route>
        <Route path='/invoice/preview' element={<Order />}></Route>
        <Route path='/preview' element={<Preview />}>
          <Route path='invoice' element={<InvoiceTemplate />}></Route>
        </Route>
        <Route path='/report' element={<Report />}></Route>
        <Route path='/products' element={<Product />}></Route>
        <Route path='/products/add' element={<NewProduct />}></Route>
        <Route path='/order' element={<Order />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </NavigationContext.Provider>
  );
}

export default App;
