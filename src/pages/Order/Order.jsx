import React from 'react';

import { Typography } from '../../components';
import { useSelector } from 'react-redux';
import OrderTable from './OrderTable/OrderTable';
import OrderForm from './OrderForm/OrderForm';

import styles from './Order.module.scss';

const Order = () => {
	const { cart, totalAmount } = useSelector((state) => state.cart);

	return (
		<div className={styles.order}>
			<div className={styles.container}>
				<Typography variant='title'>Оформление заказа</Typography>
				<section className={styles.content}>
					<div className={styles.left}>
						<OrderForm />
					</div>
					<div className={styles.right}>
						<div className={styles.own}>
							<Typography>Ваш заказ</Typography>
							<OrderTable rows={cart} amount={totalAmount} />
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Order;
