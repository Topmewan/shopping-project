import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeItemFromCart } from '../../../feature/reducers/Cart/cart.slice';
import styles from './Table.module.scss';

export const Table = ({ columns, rows }) => {
	const dispatch = useDispatch();

	return (
		<table className={styles.table}>
			<thead>
				<tr>
					{columns.map((column) => (
						<td key={column.accessor}>{column.label}</td>
					))}
				</tr>
			</thead>

			<tbody>
				{rows.map((item, idx) => {
					return (
						<tr key={idx + 1}>
							<td>
								<div className={styles.info}>
									<span
										onClick={() => dispatch(removeItemFromCart(item))}
										className={styles.delete}
									>
										<svg
											width='14'
											height='14'
											viewBox='0 0 14 14'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path d='M1 1L13 13M13 1L1 13' stroke='black' />
										</svg>
									</span>
									<img src={item.image} alt={item.title} />
									<p>{item.title}</p>
								</div>
							</td>
							<td>${item.price}</td>
							<td>
								<input type='number' value={item.count} />
							</td>
							<td>${item.price * item.count}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};
