import React, { useState } from 'react';
import { Typography } from '../../../components';
import { FormField } from '../../../ui-kit';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import styles from './OrderForm.module.scss';

const schema = Yup.object().shape({
	name: Yup.string()
		.matches(/^([^0-9]*)$/, 'Имя не должно содержать цифры')
		.required('Укажите имя'),
	email: Yup.string()
		.required('Укажите ваш E-mail')
		.email('Некоректно указан E-mail,попробуйте снова'),
	phone: Yup.string().required('Укажите ваш phone'),
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
			</div>
			<div className={styles.data}>
				<Typography>Комментарий</Typography>
			</div>

			<button type='submit'>Sub</button>
		</form>
	);
}

export default OrderForm;
