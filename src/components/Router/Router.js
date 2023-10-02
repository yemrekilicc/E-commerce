import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from '../HomePage/HomePage';
import CheckOut from '../Checkout/checkout';
import LoginPage from '../LoginPage/Login';
import EmailPage from '../EmailPage/Email';
import ProductsPage from '../ProductsPage/ProductsPage';
import ProductPage from '../Product/productPage';


const Router = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' element={<HomePage/>}></Route>
      <Route exact path='/checkout' element={<CheckOut/>}></Route>
      <Route exact path='/login' element={<LoginPage/>}></Route>
      <Route exact path='login_email' element={<EmailPage/>}></Route>
      <Route exact path='/products' element={<ProductsPage/>}></Route>
      <Route exact path='/product_page' element={<ProductPage/>}></Route>


    </Routes>
  );
}

export default Router;