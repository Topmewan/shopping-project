import React, {useState} from "react";

import styles from "./Main.module.scss";
import {Typography} from "../../components";
import {IButton, Spinner} from "../../components/ui-kit";
import {useMain} from "./useMain";

const Main = () => {
  const {item, isLoading, isError} = useMain();
  const {title, image, price, category, sizes, colors} = item;

  const [itemSize, setItemSize] = useState("");
  const [itemColor, setItemColor] = useState("");
  const [count, setCount] = useState(1);

  const handleChange = (e) => {
    setCount(e.target.value);
  };

  const handeSubmit = () => {
    const data = {
      title,
      price,
      count,
      color: itemColor,
      size: itemSize,
    };
    alert(JSON.stringify(data));
  };

  const renderingValue = () => {
    if (isLoading) return <Spinner/>;
    if (Object.keys(item).length > 0) {
      return (
        <>
          <Typography variant="title">{title}</Typography>
          <section className={styles.about}>
            <div
              className={styles.left}
              style={{backgroundImage: `url(${image})`}}
            />
            <div className={styles.right}>
              <div className={styles.info}>
                <h2>${price}</h2>
                <p>Выберите размер</p>
                <ul className={styles.extra}>
                  {sizes?.map((size, idx) => (
                    <li
                      onClick={() => setItemSize(size)}
                      className={`${styles.sz} ${
                        itemSize === size && styles.sizeActive
                      }`}
                      key={idx}
                    >
                      {size}
                    </li>
                  ))}
                </ul>
                <p>Выберите цвет</p>
                <ul className={styles.extra}>
                  {colors.map((color, idx) => (
                    <li
                      onClick={() => setItemColor(color)}
                      className={`${styles.cl} ${
                        itemColor === color && styles.colorActive
                      }`}
                      key={idx}
                      style={{backgroundColor: `${color}`}}
                    />
                  ))}
                </ul>

                <div className={styles.action}>
                  <input
                    type="number"
                    value={count}
                    min={1}
                    onChange={handleChange}
                  />
                  <IButton onClick={handeSubmit}>Добавить в корзину</IButton>
                </div>
              </div>
            </div>
          </section>
        </>
      );
    } else {
      return <h1>No data</h1>;
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.container}>{renderingValue()}</div>
    </div>
  );
};

export default Main;
