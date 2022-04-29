import React, {useContext} from 'react';
import styles from './Collection.module.scss';
import Title from "../../../components/Title";
import IButton from "../../../components/ui-kit/IButton";
import CardItem from "../../../components/CardItem";
import {ShopContext} from "../../../context/ShopContext";
import {useNavigate} from 'react-router-dom';

const Collection = () => {
  const navigate = useNavigate();
  const {threeItems: items, isLoading, isError} = useContext(ShopContext);


  return (
    <section className={styles.collection}>
      <div className={styles.container}>
          <Title>
            Новая колекция
          </Title>
            {isLoading
              ? <h1>Loading...</h1>
              : (<div className={styles.list}>
                {items.length > 0
                  ? items.map((item) => <CardItem key={item.id} item={item}/>)
                  : <h1>No data</h1>
                }
              </div>)
            }
            <IButton variant='primary' onClick={() => navigate('/shop')}>
              Открыть магазин
            </IButton>

      </div>
    </section>
  );
};

export default Collection;