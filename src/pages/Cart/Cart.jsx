import React from 'react';
import { Typography } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Cart.module.scss';
import { Table } from './Table/Table';
import { IButton } from '../../components/ui-kit';
import { clearCart } from '../../feature/reducers/Cart/cart.slice';

const columns = [
  {
    accessor: 'item',
    label: 'Товар',
  },
  {
    accessor: 'price',
    label: 'Цена',
  },
  {
    accessor: 'quantity',
    label: 'Количество',
  },
  {
    accessor: 'total',
    label: 'Всего',
  },
];

const Cart = () => {
  const dispatch = useDispatch();
  const { cart, totalAmount } = useSelector((state) => state.cart);

  return (
    <div className={styles.cart}>
      <div className={styles.container}>
        <Typography variant='title'>Корзина</Typography>
        {cart.length > 0 ? (
          <section className={styles.content}>
            <Table columns={columns} rows={cart} />

            <div className={styles.extra}>
              <div className={styles.coupon}>
                <input type='text' placeholder='Введите купон' />
                <IButton variant='primary'>Применить купон</IButton>
              </div>
              <IButton variant='primary' onClick={() => dispatch(clearCart())}>
                Очистить корзину
              </IButton>
            </div>

            <div className={styles.total}>
              <p>Подытог: ${totalAmount}</p>
              <div className={styles.action}>
                <IButton variant='primary'>Итого: ${totalAmount}</IButton>
                <IButton variant='secondary'>Оформить заказ</IButton>
              </div>
            </div>
          </section>
        ) : (
          <h1>Корзина пуста</h1>
        )}
      </div>
    </div>
  );
};

export default Cart;
