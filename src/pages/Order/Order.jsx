import React, { useState } from 'react';
import styles from './Order.module.scss';
import { Typography } from '../../components';
import { Input } from '../../ui-kit';

const initialState = {
	name: '',
	email: '',
	phone: '',
	country: '',
	city: '',
	street: '',
	home: '',
	apartment: '',
	comment: '',
};

const Order = () => {
	const [values, setValues] = useState(initialState);
	const {
		name,
		email,
		phone,
		city,
		country,
		street,
		home,
		apartment,
		comment,
	} = values;

	return (
		<div className={styles.order}>
			<div className={styles.container}>
				<Typography variant='title'>Оформление заказа</Typography>
				<section className={styles.content}>
					<div className={styles.left}>
						<form className={styles.form}>
							<div className={styles.data}>
								<Typography>Данные покупателя</Typography>
								<Input value={name} placeholder='Имя' />
								<Input value={email} placeholder='E-mail' />
								<Input value={phone} placeholder='Телефон' />
							</div>
							<div className={styles.data}>
								<Typography>Адресс получателя</Typography>
								<Input value={country} placeholder='Страна' />
								<Input value={city} placeholder='Город' />
								<Input value={street} placeholder='Улица' />
								<Input value={home} placeholder='Дом' />
								<Input value={apartment} placeholder='Квартира' />
							</div>
							<div className={styles.data}>
								<Typography>Комментарий</Typography>
								<Input value={comment} placeholder='Комментарий' />
							</div>
						</form>
					</div>
					<div className={styles.right}></div>
				</section>
			</div>
		</div>
	);
};

export default Order;
