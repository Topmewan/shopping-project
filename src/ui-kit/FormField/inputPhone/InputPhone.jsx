import React from 'react';
import styles from './InputPhone.module.scss';

const InputPhone = ({
	className,
	name,
	type,
	error,
	placeholder,
	onBlur,
	onFocus,
}) => {
	const PATTERN = /\D/g; //все символы, не являющиеся числами

	const getInputNumbersValue = (val) => {
		// замени все не числа на пустую строку
		return val.replace(PATTERN, '');
	};

	const handlePhoneInput = (e) => {
		const input = e.target;
		let inputNumbersValue = getInputNumbersValue(input.value); //получаем ввод
		let formattedInputValue = ''; //тут храним конечный результат
		const selectionStart = input.selectionStart; //следим за курсором

		if (!inputNumbersValue) {
			return (input.value = '');
		}

		if (input.value.length !== selectionStart) {
			return;
		}

		if (['7', '8', '9'].indexOf(inputNumbersValue[0]) > -1) {
			// Russian phone number
			if (inputNumbersValue[0] === '9') {
				inputNumbersValue = '7' + inputNumbersValue;
			}

			const firstSymbols = inputNumbersValue[0] === '8' ? '8' : '+7';
			formattedInputValue = firstSymbols + ' ';

			if (inputNumbersValue.length > 1) {
				formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
			}
			if (inputNumbersValue.length >= 5) {
				formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
			}
			if (inputNumbersValue.length >= 8) {
				formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
			}
			if (inputNumbersValue.length >= 10) {
				formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
			}
		} else {
			// Not Russian phone number
			formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
		}

		input.value = formattedInputValue;
	};

	const handlePhoneKeyDown = (e) => {
		// удаление первого элемента
		const input = e.target;
		if (
			e.key === 'Backspace' &&
			getInputNumbersValue(input.value).length === 1
		) {
			input.value = '';
		}
		return input;
	};

	return (
		<>
			<input
				className={`${className}`}
				maxLength={18}
				name={name}
				type={type}
				placeholder={placeholder}
				onInput={handlePhoneInput}
				onKeyDown={handlePhoneKeyDown}
				onBlur={onBlur}
				obFocus={onFocus}
			/>
		</>
	);
};

export default InputPhone;
