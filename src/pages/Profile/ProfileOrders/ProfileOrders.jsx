import React from 'react';
import { useSelector } from 'react-redux';
import { SettingsBlock } from '../../../components';
import { format, parseISO } from 'date-fns';
import { ru } from 'date-fns/locale';
import styles from './ProfileOrders.module.scss';

const ProfileOrders = () => {
	const {
		user: { orders },
	} = useSelector((state) => state.auth);

	return (
		<>
			{orders.map((order) => (
				<h1>
					Заказ от
					{format(parseISO(order.createdAt), ' d MMMM  k:m', {
						locale: ru,
					})}
				</h1>
			))}
		</>
	);
};

export default ProfileOrders;
