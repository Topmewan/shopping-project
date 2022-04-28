import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../../pages/Home";
import Shop from "../../../pages/Shop";
import About from "../../../pages/About";
import Contacts from "../../../pages/Contacts";
import Cart from "../../../pages/Cart";
import NotFound from "../../../pages/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/about" element={<About />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
