import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Filter from './Filter/Filter';
import { CardItem } from '../../components';
import { IButton, Typography, Spinner } from '../../ui-kit';
import { setFilter } from '../../feature/reducers/Filter/filter.slice';

import { useGetShopItems } from '../../hooks/useGetShopItems';

import { Pagination } from 'antd';

import styles from './Shop.module.scss';

const sortList = [
	{ sortOrder: 'asc', title: 'Сначала дешевле' },
	{ sortOrder: 'desc', title: 'Сначала дороже' },
];

const Shop = () => {
	const dispatch = useDispatch();
	const filter = useSelector((state) => state.filter);
	const [order, setOrder] = useState('asc');
	const [page, setPage] = useState(1);

	const { shopItems, isLoading } = useGetShopItems(filter, order);

	const handleSetPage = (page) => {
		setPage(page);
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const getFilter = (val) => {
		dispatch(setFilter(val));
		handleSetPage(1);
	};

	const handleSort = (order) => {
		setOrder(order);
		handleSetPage(1);
	};

	const paginationItems = shopItems.filter((item, idx) => {
		return idx + 1 <= page * 9 && idx + 1 >= page * 9 - 9;
	});

	return (
		<section className={styles.shop}>
			<div className={styles.container}>
				<Typography variant='title'>Магазин</Typography>

				{/* FILTER */}
				<Filter getFilter={getFilter} filterVal={filter} />

				{/* SORT */}
				<div className={styles.sort}>
					{sortList.map(({ sortOrder, title }, idx) => (
						<IButton
							key={idx}
							variant='primary'
							onClick={() => handleSort(sortOrder)}
							className={`${order === sortOrder ? styles.active : ''}`}
						>
							{title}
						</IButton>
					))}
				</div>

				{/* CONTENT */}
				<section className={styles.content}>
					{isLoading ? (
						<Spinner />
					) : (
						<>
							{shopItems.length > 0 ? (
								<>
									<p>
										Показано {paginationItems.length} из {shopItems.length}{' '}
										товаров
									</p>
									{/* LIST */}
									<div className={styles.list}>
										{paginationItems.map((item) => (
											<CardItem key={item?.id} item={item} />
										))}
									</div>
									<p>
										Показано {paginationItems.length} из {shopItems.length}{' '}
										товаров
									</p>{' '}
									{/* PAGINATION */}
									<div className={styles.pagination}>
										<Pagination
											simple
											onChange={handleSetPage}
											current={page}
											total={shopItems.length}
											pageSize={9}
										/>
									</div>
								</>
							) : (
								<h1>Пока тут ничего нет</h1>
							)}
						</>
					)}
				</section>
			</div>
		</section>
	);
};

export default Shop;
