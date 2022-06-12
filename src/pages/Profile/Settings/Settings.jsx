import React, { useState } from 'react';
import useFormFocus from './../../../hooks/useFormFocus';
import { IButton, FormField } from './../../../ui-kit';
import { schema } from './../resolver';
import { updateUser } from './../../../feature/reducers/Auth/auth.actions';
import { SettingsBlock } from './../../../components';
import { toast } from 'react-toastify';
import { UserAuth } from '../../../context/AuthContext';
import styles from './Settings.module.scss';

const Settings = () => {
	const { user } = UserAuth();

	const initialState = {
		email: user?.email,
	};

	const { register, handleBlur, handleFocus, handleSubmit, errors, reset } =
		useFormFocus(initialState, schema);

	const [isActive, setIsActive] = useState(false);

	const handleChangeActive = (active) => {
		if (active === true) {
			setIsActive(false);
			reset(user);
		} else if (active === false) {
			setIsActive(true);
		}
	};

	// const onSubmit = async (data) => {
	// 	const { username, email } = data;

	// 	const newData = {
	// 		username,
	// 		email,
	// 	};
	// 	dispatch(updateUser({ id: user.id, data: newData })).then(() => {
	// 		toast('Данные успешно обновлены');
	// 		setIsActive(false);
	// 	});
	// };

	// useEffect(() => {
	// 	reset(user);
	// }, [user, reset]);

	return (
		<>
			<SettingsBlock
				title='Личные данные'
				isActive={isActive}
				onClick={handleChangeActive}
				variant='change'
			>
				<form className={styles.form}>
					{isActive ? (
						<>
							<FormField
								name='email'
								register={register}
								type='text'
								error={errors.email && errors.email?.message}
								onBlur={handleBlur}
								onFocus={handleFocus}
							/>
							<IButton variant='secondary'>Применить</IButton>
						</>
					) : (
						<>
							<p>{user?.email}</p>
						</>
					)}
				</form>
			</SettingsBlock>
			<SettingsBlock title='Что-то еще' />
			<SettingsBlock title='Что-то еще ' />
		</>
	);
};

export default Settings;
