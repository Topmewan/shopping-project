import React, { useState } from "react";
import { CardItem, Typography } from "../../components";
import { Spinner } from "../../components/ui-kit";
import { useMain } from "./useMain";
import MainCard from "./MainCard";

import styles from "./Main.module.scss";
import { useDispatch } from "react-redux";
import { addToCart } from "../../feature/reducers/Cart/cart.slice";
import { toast } from "react-toastify";

const Main = () => {
  const dispatch = useDispatch();
  const { item, similarItems, isLoading } = useMain();
  const { title, image, price, id } = item;
  const [itemSize, setItemSize] = useState("");
  const [itemColor, setItemColor] = useState("");
  const [count, setCount] = useState(1);

  const handleChange = (e) => {
    setCount(e.target.value);
  };

  const handeSubmit = () => {
    if (!itemSize || !itemColor) {
      toast.warn("Выберите цвет и размер!", {
        position: "top-right",
      });
    } else {
      const data = {
        id,
        image,
        title,
        price,
        count,
        color: itemColor,
        size: itemSize,
      };
      dispatch(addToCart(data));
      console.log(data);
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        {isLoading && <Spinner />}
        {Object.keys(item).length > 0 ? (
          <>
            <Typography variant="title">
              {item.title ? item.title : "Название товара"}
            </Typography>
            <MainCard
              item={item}
              itemSize={itemSize}
              setItemSize={setItemSize}
              itemColor={itemColor}
              setItemColor={setItemColor}
              count={count}
              onChange={handleChange}
              onSubmit={handeSubmit}
            />
          </>
        ) : (
          <h1>No data</h1>
        )}
        <section className={styles.similar}>
          <Typography variant="subtitle">Связанные товары</Typography>
          <div className={styles.list}>
            {similarItems.length > 0
              ? similarItems.map((similarItem) => {
                  return <CardItem key={similarItem.id} item={similarItem} />;
                })
              : ""}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Main;
