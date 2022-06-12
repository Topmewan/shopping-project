import React, { useState } from 'react';
import { UserAuth } from '../../context/AuthContext';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';

import useFormFocus from '../../hooks/useFormFocus';

import { FormWrapper } from '../../components';
import { FormField, IButton } from '../../ui-kit';
import { schema } from './resolver';

import styles from './../SignUp/SignUp.module.scss';

const initialState = {
	email: false,
	password: false,
};

const Login = () => {
	const navigate = useNavigate();
	const { signIn } = UserAuth();

	const { isError } = useSelector((state) => state.auth);
	const { register, handleBlur, handleFocus, errors, isFocused, handleSubmit } =
		useFormFocus(initialState, schema);

	const onSubmit = async (data) => {
		try {
			await signIn(data.email, data.password);
			navigate('/');
		} catch (e) {
			console.log(e);
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
					error={errors.password && errors.password?.message}
					placeholder='Введите пароль'
					isFocused={isFocused.password}
					onFocus={handleFocus}
					onBlur={handleBlur}
				/>
				{isError && (
					<div className={styles.warn}>
						<span>{isError}</span>
					</div>
				)}

				<div className={styles.message}>
					<span>Нет аккаунта?</span>
					<Link to='/signup'>Регистрация</Link>
				</div>
				<IButton>Войти</IButton>
			</form>
		</FormWrapper>
	);
};

export default Login;
