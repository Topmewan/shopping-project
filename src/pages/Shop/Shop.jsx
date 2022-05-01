import React, {useContext, useState} from "react";
import {ShopContext} from "../../context/ShopContext";
import {CardItem, Typography} from "../../components";
import styles from "./Shop.module.scss";
import {Spinner} from "../../components/ui-kit";
import Filter from "./Filter/Filter";
import {Pagination} from 'antd';


const Shop = () => {
  const [filter, setFilter] = useState("all");
  const [page, setPage] = useState(1);

  const {data: items, isLoading} = useContext(ShopContext);


  const newItems = items.filter((item) => {
    if (!filter || filter === "all") return true;
    return item.category === filter;
  });

  const pagItems = newItems.filter((item, idx) => {
    return idx + 1 <= page * 9 && idx + 1 >= page * 9 - 9
  })

  const getFilter = (val) => {
    setFilter(val);
    setPage(1);
  };

  return (
    <section className={styles.shop}>
      <div className={styles.container}>
        <Typography variant="title">Магазин</Typography>
        {/*<Filter getFilter={getFilter} filterVal={filter}/>*/}
        <p>Показано {pagItems.length} из {newItems.length} товаров</p>
        <div className={styles.list}>
          {isLoading
            ? <Spinner/>
            : pagItems.map((item) => (
              <CardItem key={item.id} item={item}/>
            ))
          }
        </div>
        <p>Показано {pagItems.length} из {newItems.length} товаров</p>

        <div className={styles.pagination}>
          <Pagination
            simple
            onChange={setPage}
            current={page}
            total={newItems.length}
            pageSize={9}
          />
        </div>

      </div>
    </section>
  );
};

export default Shop;
