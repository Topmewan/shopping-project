import React, { useState } from 'react';
import { FormField, IButton } from './../../ui-kit';

import { schema } from './resolver';
import styles from './SignUp.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { registration } from '../../feature/reducers/Auth/auth.actions';
import { useNavigate } from 'react-router-dom';
import { FormWrapper } from '../../components';
import useFormFocus from '../../hooks/useFormFocus';

const initialState = {
	username: false,
	email: false,
	password: false,
	passwordConfirm: false,
};

const SignUp = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

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

	const onSubmit = async (data) => {
		let { username, email, password, passwordConfirm } = data;
		if (password === passwordConfirm) {
			setIsPasswordMatch(true);
			const registerData = {
				username,
				email,
				password,
				orders: [],
			};
			dispatch(registration(registerData)).then(() => {
				navigate('/');
			});
		} else {
			setIsPasswordMatch(false);
		}
	};

	return (
		<FormWrapper>
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

				<IButton>Отправить</IButton>
			</form>
		</FormWrapper>
	);
};

export default SignUp;
