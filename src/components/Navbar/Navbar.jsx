import React, { useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { IButton } from '../../ui-kit';
import { ReactComponent as Logo } from '../../assets/navbar/Лого.svg';
import { ReactComponent as Cart } from '../../assets/navbar/cart.svg';
import { ReactComponent as Profile } from '../../assets/navbar/profile.svg';
import { ReactComponent as Logout } from '../../assets/navbar/logout.svg';

import { useDispatch, useSelector } from 'react-redux';
import { getTotal } from '../../feature/reducers/Cart/cart.slice';
import { UserAuth } from '../../context/AuthContext';

import styles from './Navbar.module.scss';

const Navbar = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { totalQuantity, cart } = useSelector((state) => state.cart);
	const { user, logOut } = UserAuth();

	useEffect(() => {
		dispatch(getTotal());
	}, [cart, dispatch]);

	const handleSignOut = async () => {
		try {
			await logOut();
			navigate('/');
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<div className={styles.header}>
			<div className={styles.container}>
				<Link to='/'>
					<Logo />
				</Link>

				<div className={styles.navigate}>
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
				</div>

				<div className={styles.account}>
					<Link to='/cart'>
						<Cart />
						<span>{totalQuantity}</span>
					</Link>

					{user?.email ? (
						<>
							<Link to='/profile/settings'>
								<Profile />
							</Link>
							<Logout onClick={handleSignOut} />
						</>
					) : (
						<>
							<Link to='/signup'>
								<IButton variant='more'>Регистрация</IButton>
							</Link>
							<Link to='/login' className={styles.login}>
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
