import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ShopPage from '../ShopPage/ShopPage';
import CheckOut from '../Checkout/checkout';


const Router = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' element={<ShopPage/>}></Route>
      <Route exact path='/checkout' element={<CheckOut/>}></Route>
    </Routes>
  );
}

export default Router;