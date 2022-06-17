import { Fragment } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
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
} from "./pages";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/admin'>
          <Route path='/dashboard' element={<Dashboard />}></Route>
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
