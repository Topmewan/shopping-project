import React from "react";
import styles from "./Layout.module.scss";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Breadcrumbs from "../Breadcrumbs";
import {AppRoutes} from "../../routes";

const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <Breadcrumbs/>
      <AppRoutes />
      <Footer/>
    </div>
  );
};

export default Layout;
