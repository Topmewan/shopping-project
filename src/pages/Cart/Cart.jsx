import React, { useState, useEffect } from 'react';
import { Typography } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import styles from './Cart.module.scss';
import { Table } from './Table/Table';
import { IButton } from '../../components/ui-kit';
import { clearCart } from '../../feature/reducers/Cart/cart.slice';
import { fetchTickets } from '../../feature/reducers/Tickets/tickets.actions';

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
  const { realTicket, isError } = useSelector((state) => state.tickets);
  const [ticket, setTicket] = useState('');

  const handleSumbit = (e) => {
    e.preventDefault();
    if (!ticket) {
      toast.warn('Введите купон', { position: 'bottom-left', autoClose: 2000 });
    } else {
      dispatch(fetchTickets(ticket));
    }
  };

  console.log(realTicket);

  const currentAmount =
    Object.keys(realTicket).length > 0
      ? totalAmount - (totalAmount * realTicket?.size) / 100
      : totalAmount;

  return (
    <div className={styles.cart}>
      <div className={styles.container}>
        <Typography variant='title'>Корзина</Typography>
        {cart.length > 0 ? (
          <section className={styles.content}>
            <Table columns={columns} rows={cart} />

            <div className={styles.extra}>
              <form className={styles.coupon} onSubmit={handleSumbit}>
                <input
                  type='text'
                  placeholder='Введите купон'
                  value={ticket}
                  onChange={(e) => setTicket(e.target.value)}
                />
                {isError && (
                  <p className={`${styles.alert} ${styles.warning}`}>
                    {isError}
                  </p>
                )}
                {Object.keys(realTicket).length > 0 && (
                  <p className={`${styles.alert} ${styles.good}`}>
                    Применена скидка {realTicket.size}%
                  </p>
                )}

                <IButton variant='primary' type='sumbit'>
                  Применить купон
                </IButton>
              </form>
              <IButton variant='primary' onClick={() => dispatch(clearCart())}>
                Очистить корзину
              </IButton>
            </div>

            <div className={styles.total}>
              <p>Подытог: ${totalAmount}</p>
              <div className={styles.action}>
                <IButton variant='primary'>Итого:$ {currentAmount}</IButton>
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
