import React from "react";
import styles from "./Layout.module.scss";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { AppRoutes } from "../../routes";
import { ToastContainer } from "react-toastify";

const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <ToastContainer />
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
  );
};

export default Layout;
