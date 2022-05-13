import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IButton } from '../../ui-kit';
import logo from '../../assets/navbar/Лого.svg';
import cartIcon from '../../assets/navbar/shopping-bags 1.svg';
import phone from '../../assets/navbar/telephone 1.svg';
import { useDispatch, useSelector } from 'react-redux';
import { getTotal } from '../../feature/reducers/Cart/cart.slice';
import { logOut } from '../../feature/reducers/Auth/auth.slice';

import styles from './Navbar.module.scss';

const Navbar = () => {
	const dispatch = useDispatch();
	const { totalQuantity, cart } = useSelector((state) => state.cart);
	const { user } = useSelector((state) => state.auth);

	useEffect(() => {
		dispatch(getTotal());
	}, [cart, dispatch]);

	return (
		<div className={styles.header}>
			<div className={styles.container}>
				<div className={styles.content}>
					<Link to='/'>
						<img src={logo} alt='womazing' />
					</Link>

					<nav className={styles.navigate}>
						<NavLink
							to='/'
							className={({ isActive }) => (isActive ? styles.active : '')}
						>
							Главная
						</NavLink>
						<NavLink
							to='/shop'
							className={({ isActive }) => (isActive ? styles.active : '')}
						>
							Магазин
						</NavLink>
					</nav>

					<div className={styles.service}>
						<div className={styles.number}>
							<img src={phone} alt='phone' />
							<a href='tel:8-999-888-777'>8-999-888-777</a>
						</div>

						<div className={styles.cart}>
							<Link to='/cart'>
								<img src={cartIcon} alt='cart' />
							</Link>
							<span>{totalQuantity}</span>
						</div>
					</div>
					{user ? (
						<IButton variant='more' onClick={() => dispatch(logOut())}>
							Выйти
						</IButton>
					) : (
						<>
							<Link to='/signup'>
								<IButton variant='more'>Регистрация</IButton>
							</Link>
							<Link to='/login'>
								<IButton variant='more'>Войти</IButton>
							</Link>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
