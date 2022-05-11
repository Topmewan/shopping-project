import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
	Home,
	Shop,
	Main,
	About,
	Contacts,
	Cart,
	Order,
	NotFound,
	SignUp,
} from '../../pages';

const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/shop' element={<Shop />} />
			<Route path='/products/:id' element={<Main />} />
			<Route path='/about' element={<About />} />
			<Route path='/contacts' element={<Contacts />} />
			<Route path='/cart' element={<Cart />} />
			<Route path='/order' element={<Order />} />
			<Route path='/signup' element={<SignUp />} />
			<Route path='*' element={<NotFound />} />
		</Routes>
	);
};

export default AppRoutes;
