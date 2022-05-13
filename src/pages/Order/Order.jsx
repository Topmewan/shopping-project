import React from 'react';

import { Typography } from '../../components';
import { useSelector } from 'react-redux';
import OrderTable from './OrderTable/OrderTable';
import OrderForm from './OrderForm/OrderForm';

import styles from './Order.module.scss';
import { getAmount } from '../../utils/data/ticket';

const Order = () => {
	const { cart, totalAmount } = useSelector((state) => state.cart);
	const { realTicket } = useSelector((state) => state.tickets);
	const { user } = useSelector((state) => state.auth);
	const currentAmount = getAmount(realTicket, totalAmount);

	return (
		<div className={styles.order}>
			<div className={styles.container}>
				<Typography variant='title'>Оформление заказа</Typography>
				<section className={styles.content}>
					<div className={styles.left}>
						<OrderForm
							cart={cart}
							amount={currentAmount}
							user={user}
							ticket={realTicket}
						/>
					</div>

					<div className={styles.right}>
						<div className={styles.own}>
							<Typography>Ваш заказ</Typography>
							<OrderTable
								rows={cart}
								amount={currentAmount}
								ticket={realTicket}
							/>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Order;
