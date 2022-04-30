import React, {useContext} from 'react';
import {ShopContext} from "../../../context/ShopContext";
import {useNavigate} from 'react-router-dom';

import styles from './Collection.module.scss';
import {CardItem, Typography} from "../../../components";
import {IButton, Spinner} from "../../../components/ui-kit";


const Collection = () => {
  const navigate = useNavigate();
  const {threeItems: items, isLoading, isError} = useContext(ShopContext);


  return (
    <section className={styles.collection}>
      <div className={styles.container}>
        <Typography variant='subtitle'>
          Новая колекция
        </Typography>
        <div className={styles.list}>
          {isLoading
            ? <Spinner/>
            : <>
              {items.length > 0
                ? items.map((item) => <CardItem key={item.id} item={item}/>)
                : <h1>No data</h1>
              }
            </>}
        </div>
        <IButton variant='primary' onClick={() => navigate('/shop')}>
          Открыть магазин
        </IButton>

      </div>
    </section>
  );
};

export default Collection;