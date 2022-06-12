import React, { useState } from 'react';
import { UserAuth } from '../../context/AuthContext';

import { useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import useFormFocus from '../../hooks/useFormFocus';

import { FormField, IButton } from './../../ui-kit';
import { FormWrapper } from '../../components';

import { schema } from './resolver';

import styles from './SignUp.module.scss';

const initialState = {
	email: false,
	password: false,
	passwordConfirm: false,
};

const SignUp = () => {
	const navigate = useNavigate();
	const { signUp } = UserAuth();

	const { isError } = useSelector((state) => state.auth);
	const [isPasswordMatch, setIsPasswordMatch] = useState(true);
	const { register, handleBlur, handleFocus, handleSubmit, errors, isFocused } =
		useFormFocus(initialState, schema);

	const errorPasswordMessage = (message) => {
		if (message) {
			return message;
		}
		if (!isPasswordMatch) {
			return 'Пароли не совпадают';
		}
	};

	// const onSubmit = async (data) => {
	// 	let { email, password, passwordConfirm } = data;
	// 	if (password === passwordConfirm) {
	// 		setIsPasswordMatch(true);
	// 		const registerData = {
	// 			email,
	// 			password,
	// 			orders: [],
	// 		};
	// 		dispatch(registration(registerData)).then(() => {
	// 			navigate('/');
	// 		});
	// 	} else {
	// 		setIsPasswordMatch(false);
	// 	}
	// };

	const onSubmit = async (data) => {
		let { email, password, passwordConfirm } = data;
		if (password === passwordConfirm) {
			setIsPasswordMatch(true);
			try {
				await signUp(email, password);
				navigate('/');
			} catch (e) {
				console.log(e);
			}
		} else {
			setIsPasswordMatch(false);
		}
	};

	return (
		<FormWrapper>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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
					name='passwordConfirm'
					register={register}
					type='password'
					error={errorPasswordMessage(errors.passwordConfirm?.message)}
					placeholder='Подтвердите пароль'
					isFocused={isFocused.passwordConfirm}
					onFocus={handleFocus}
					onBlur={handleBlur}
				/>
				{isError && (
					<div className={styles.warn}>
						<span>{isError}</span>
					</div>
				)}

				<div className={styles.message}>
					<span>Уже есть аккаунт?</span>
					<Link to='/login'>Войдите</Link>
				</div>

				<IButton>Отправить</IButton>
			</form>
		</FormWrapper>
	);
};

export default SignUp;
