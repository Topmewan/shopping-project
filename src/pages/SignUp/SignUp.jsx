import React, { useState } from 'react';
import { FormField, IButton } from './../../ui-kit';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './resolver';
import styles from './SignUp.module.scss';

const SignUp = () => {
	const [isFocused, setIsFocused] = useState({
		username: false,
		email: false,
		password: false,
		passwordConfirm: false,
	});

	const {
		register,
		watch,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schema) });

	const watchAllFileds = watch();

	const [isPasswordMatch, setIsPasswordMatch] = useState(true);

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

	const errorPasswordMessage = (message) => {
		if (message) {
			return message;
		}
		if (!isPasswordMatch) {
			return 'Пароли не совпадают';
		}
	};

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<section className={styles.signup}>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<FormField
					name='username'
					register={register}
					type='text'
					error={errors.username && errors.username?.message}
					placeholder='Логин'
					isFocused={isFocused.username}
				/>

				<FormField
					name='email'
					register={register}
					type='text'
					error={errors.email && errors.email?.message}
					placeholder='E-mail'
					isFocused={isFocused.email}
				/>
				<FormField
					name='password'
					register={register}
					type='password'
					error={errorPasswordMessage(errors.password?.message)}
					placeholder='Введите пароль'
					isFocused={isFocused.password}
					onFocus={handleFocus}
					onBlur={handleBlur}
				/>
				<FormField
					name='passwordСonfirm'
					register={register}
					type='password'
					error={errorPasswordMessage(errors.passwordConfirm?.message)}
					placeholder='Подтвердите пароль'
					isFocused={isFocused.passwordConfirm}
					onFocus={handleFocus}
					onBlur={handleBlur}
				/>

				<IButton>Отправить</IButton>
			</form>
		</section>
	);
};

export default SignUp;
