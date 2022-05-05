import React, { useEffect } from "react";
import styles from "./Navbar.module.scss";
import { Link, NavLink } from "react-router-dom";
import logo from "../ui-kit/assets/navbar/Лого.svg";
import cartIcon from "../ui-kit/assets/navbar/shopping-bags 1.svg";
import phone from "../ui-kit/assets/navbar/telephone 1.svg";
import { useDispatch, useSelector } from "react-redux";
import { getTotal } from "../../feature/reducers/Cart/cart.slice";

const Navbar = () => {
	const dispatch = useDispatch();
	const { totalQuantity, cart } = useSelector((state) => state.cart);

	useEffect(() => {
		dispatch(getTotal());
	}, [cart, dispatch]);

	return (
		<div className={styles.header}>
			<div className={styles.container}>
				<div className={styles.content}>
					<Link to="/">
						<img src={logo} alt="womazing" />
					</Link>

					<nav className={styles.navigate}>
						<NavLink
							to="/"
							className={({ isActive }) => (isActive ? styles.active : "")}
						>
							Главная
						</NavLink>
						<NavLink
							to="/shop"
							className={({ isActive }) => (isActive ? styles.active : "")}
						>
							Магазин
						</NavLink>
						<NavLink
							to="/about"
							className={({ isActive }) => (isActive ? styles.active : "")}
						>
							О бренде
						</NavLink>
						<NavLink
							to="/contacts"
							className={({ isActive }) => (isActive ? styles.active : "")}
						>
							Контакты
						</NavLink>
					</nav>

					<div className={styles.service}>
						<div className={styles.number}>
							<button>
								<img src={phone} alt="phone" />
							</button>
							<a href="tel:8-999-888-777">8-999-888-777</a>
						</div>

						<div className={styles.cart}>
							<Link to="/cart">
								<img src={cartIcon} alt="cart" />
							</Link>
							<span>{totalQuantity}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
