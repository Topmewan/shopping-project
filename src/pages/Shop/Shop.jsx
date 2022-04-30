import React, {useContext, useState} from "react";
import {ShopContext} from "../../context/ShopContext";
import {Typography} from "../../components";
import styles from "./Shop.module.scss";


const Shop = () => {

  const [filter, setFilter] = useState('all');

  const {data: items} = useContext(ShopContext);

  const newItems = items.filter((item) => {
    if (!filter || filter === 'all') return true;
    return item.category === filter
  });

  console.log(newItems)


  return (
    <section className={styles.shop}>
      <div className={styles.container}>
        <Typography variant='title'>
          Магазин
        </Typography>

        <ul className={styles.filters}>
          <li className={`${styles.filter} ${filter === 'all' && styles.active}`}
              onClick={() => setFilter('all')}>Все
          </li>
          <li className={`${styles.filter} ${filter === 'tshirts' && styles.active}`}
              onClick={() => setFilter('tshirts')}>Футболки
          </li>
          <li className={`${styles.filter} ${filter === 'sweatshirts' && styles.active}`}
              onClick={() => setFilter('sweatshirts')}>Свитшоты
          </li>
          <li className={`${styles.filter} ${filter === 'swimwear' && styles.active}`}
              onClick={() => setFilter('swimwear')}>Купальники
          </li>
          <li className={`${styles.filter} ${filter === 'coats' && styles.active}`}
              onClick={() => setFilter('coats')}>Пальто
          </li>
        </ul>

      </div>


    </section>
  );
};

export default Shop;
