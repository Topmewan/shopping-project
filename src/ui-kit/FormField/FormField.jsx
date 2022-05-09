import InputPhone from './inputPhone/InputPhone';
import styles from './FormField.module.scss';

const FormField = ({
	name,
	register,
	type,
	error,
	placeholder,
	isFocused,
	onBlur,
	onFocus,
	className,
}) => {
	return (
		<div
			className={`${styles.formfield} ${
				isFocused && styles.active
			} ${className}`}
		>
			{type === 'text' && (
				<>
					<input
						className={`${styles.input} ${isFocused && styles.inputActive}`}
						name={name}
						{...(register ? register(name) : register)}
						type={type}
						placeholder={placeholder}
						onBlur={onBlur}
						onFocus={onFocus}
					/>
					{error && <div className={styles.errorMessage}>{error}</div>}
				</>
			)}
			{type === 'tel' && (
				<>
					<InputPhone
						className={`${styles.input} ${isFocused && styles.inputActive}`}
						name={name}
						{...(register ? register(name) : register)}
						type={type}
						placeholder={placeholder}
						onBlur={onBlur}
						onFocus={onFocus}
					/>
					{error && <div className={styles.errorMessage}>{error}</div>}
				</>
			)}
		</div>
	);
};

export default FormField;
