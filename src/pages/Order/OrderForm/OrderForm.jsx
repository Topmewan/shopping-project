import React, { useState } from 'react';
import { Typography } from '../../../components';
import { FormField, IButton } from '../../../ui-kit';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import styles from './OrderForm.module.scss';

const schema = Yup.object().shape({
	name: Yup.string()
		.matches(/^([^0-9]*)$/, 'Имя не должно содержать цифры')
		.required('Укажите имя'),
	email: Yup.string()
		.required('Укажите E-mail')
		.email('Некоректно указан E-mail,попробуйте снова'),
	phone: Yup.string().required('Укажите телефон'),
	country: Yup.string()
		.matches(/^([^0-9]*)$/, 'Страна не должна содержать цифры')
		.required('Укажите страну'),
	city: Yup.string()
		.matches(/^([^0-9]*)$/, 'Город не должен содержать цифры')
		.required('Укажите город'),
	street: Yup.string().required('Укажите улицу'),
	home: Yup.string().required('Укажите дом'),
	apartment: Yup.string().required('Укажите квартиру'),
});

const normalizePhoneNumber = (val) => {
	const PATTERN = /\D/g;
	return val.replace(PATTERN, '');
};

function OrderForm() {
	const [isFocused, setIsFocused] = useState({
		name: false,
		email: false,
		phone: false,
		country: false,
		city: false,
		street: false,
		home: false,
		apartment: false,
	});

	const {
		register,
		watch,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const watchAllFileds = watch();

	const onSubmit = (data) => {
		const normalizePhone = normalizePhoneNumber(data.phone);

		const options = {
			...data,
			phone: normalizePhone,
		};
		alert(JSON.stringify(options));
	};

	const handleFocus = (e) => {
		const { name } = e.target;
		setIsFocused({ ...isFocused, [name]: true });
	};

	const handleBlur = (e) => {
		const { name } = e.target;

		if (watchAllFileds[name] !== '') {
			setIsFocused({ ...isFocused, [name]: true });
		} else {
			setIsFocused({ ...isFocused, [name]: false });
		}
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<div className={styles.data}>
				<Typography>Имя покупателя</Typography>
				<FormField
					name='name'
					register={register}
					type='text'
					error={errors.name && errors.name?.message}
					placeholder='Имя'
					isFocused={isFocused.name}
					onBlur={handleBlur}
					onFocus={handleFocus}
				/>
				<FormField
					name='email'
					register={register}
					type='text'
					error={errors.email && errors.email?.message}
					placeholder='E-mail'
					isFocused={isFocused.email}
					onBlur={handleBlur}
					onFocus={handleFocus}
				/>
				<FormField
					name='phone'
					register={register}
					type='tel'
					error={errors.phone && errors.phone?.message}
					placeholder='Телефон'
					isFocused={isFocused.phone}
					onBlur={handleBlur}
					onFocus={handleFocus}
				/>
			</div>
			<div className={styles.data}>
				<Typography>Адресс получателя</Typography>
				<FormField
					name='country'
					register={register}
					type='text'
					error={errors.country && errors.country?.message}
					placeholder='Страна'
					isFocused={isFocused.country}
					onBlur={handleBlur}
					onFocus={handleFocus}
				/>
				<FormField
					name='city'
					register={register}
					type='text'
					error={errors.city && errors.city?.message}
					placeholder='Город'
					isFocused={isFocused.city}
					onBlur={handleBlur}
					onFocus={handleFocus}
				/>
				<FormField
					name='street'
					register={register}
					type='text'
					error={errors.street && errors.street?.message}
					placeholder='Улица'
					isFocused={isFocused.street}
					onBlur={handleBlur}
					onFocus={handleFocus}
				/>
				<FormField
					name='home'
					register={register}
					type='text'
					error={errors.home && errors.home?.message}
					placeholder='Дом'
					isFocused={isFocused.home}
					onBlur={handleBlur}
					onFocus={handleFocus}
				/>
				<FormField
					name='apartment'
					register={register}
					type='text'
					error={errors.apartment && errors.apartment?.message}
					placeholder='Квартира'
					isFocused={isFocused.apartment}
					onBlur={handleBlur}
					onFocus={handleFocus}
				/>
			</div>
			<div>
				<IButton>Оформить заказ</IButton>
			</div>
		</form>
	);
}

export default OrderForm;
