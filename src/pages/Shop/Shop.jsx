import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import { Typography } from "../../components";
import styles from "./Shop.module.scss";
import Filter from "./Filter/Filter";

const Shop = () => {
  const [filter, setFilter] = useState("all");

  const { data: items } = useContext(ShopContext);

  const newItems = items.filter((item) => {
    if (!filter || filter === "all") return true;
    return item.category === filter;
  });

  const getFilter = (val) => {
    setFilter(val);
  };

  return (
    <section className={styles.shop}>
      <div className={styles.container}>
        <Typography variant="title">Магазин</Typography>
        <Filter getFilter={getFilter} filterVal={filter} />
      </div>
    </section>
  );
};

export default Shop;
