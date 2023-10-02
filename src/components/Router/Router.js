import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ShopPage from '../ShopPage/ShopPage';
import CheckOut from '../Checkout/checkout';
import LoginPage from '../LoginPage/Login';
import EmailPage from '../EmailPage/Email';
import ProductsPage from '../Products/ProductsPage';


const Router = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' element={<ShopPage/>}></Route>
      <Route exact path='/checkout' element={<CheckOut/>}></Route>
      <Route exact path='/login' element={<LoginPage/>}></Route>
      <Route exact path='login_email' element={<EmailPage/>}></Route>
      <Route exact path='/products' element={<ProductsPage/>}></Route>
    </Routes>
  );
}

export default Router;