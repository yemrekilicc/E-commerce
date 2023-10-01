import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ShopPage from '../ShopPage/ShopPage';


const Router = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' element={<ShopPage/>}></Route>
    </Routes>
  );
}

export default Router;