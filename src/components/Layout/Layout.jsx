import React from 'react';
import styles from './Layout.module.scss';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { AppRoutes } from '../../routes';
import { ToastContainer } from 'react-toastify';
import { useLocation } from 'react-router-dom';

const Layout = () => {
	const { pathname } = useLocation();

	return (
		<div className={styles.wrapper}>
			<ToastContainer />
			<Navbar />
			<AppRoutes />
			{pathname !== '/signup' ? <Footer /> : ''}
		</div>
	);
};

export default Layout;
