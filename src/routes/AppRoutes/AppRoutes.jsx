import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Shop,
  Main,
  Cart,
  Order,
  NotFound,
  SignUp,
  Login,
  Finish,
} from "../../pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/products/:id" element={<Main />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/order" element={<Order />} />
      <Route path="/checkout" element={<Finish />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
