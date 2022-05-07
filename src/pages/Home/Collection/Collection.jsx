import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardItem, Typography } from '../../../components';
import { IButton, Spinner } from '../../../components/ui-kit';

import styles from './Collection.module.scss';

const Collection = ({ newCollectionItems, isLoading, isError }) => {
  const navigate = useNavigate();

  return (
    <section className={styles.collection}>
      <div className={styles.container}>
        <Typography variant='subtitle'>Новая колекция</Typography>
        <div className={styles.list}>
          {isLoading && <Spinner />}
          {newCollectionItems.length > 0 ? (
            newCollectionItems.map((item) => (
              <CardItem key={item.id} item={item} />
            ))
          ) : (
            <h1>Пока здесь ничего нет</h1>
          )}
        </div>
        <IButton variant='primary' onClick={() => navigate('/shop')}>
          Открыть магазин
        </IButton>
      </div>
    </section>
  );
};

export default Collection;
