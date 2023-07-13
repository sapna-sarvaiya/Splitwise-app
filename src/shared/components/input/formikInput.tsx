import React from 'react';
import ErrorMessageHandler from '../errorMessageHandler/errorMessageHandler';

interface IFormProps {
	type: string;
	className?: string;
	inputClassName?: string;
	placeholder?: string;
	id?: string;
	name: string;
	onChange?: (value: string) => void;
	min?: number;
	max?: number;
	autoComplete?: string;
	autoFocus?: boolean;
	value?: any;
	disabled?: boolean;
	onClick?: (event: any) => void;
	title?: string;
	isErrorShow?: boolean;
	isDelete?: boolean;
	handleSetConfig?: () => void;
	readOnly?: boolean;
	isEmptySpaceErrorShow?: boolean;
}

const Input: React.FC<IFormProps> = (props) => {
	const {
		title,
		type,
		name,
		id,
		placeholder,
		value,
		onChange,
		autoFocus,
		disabled,
		className,
		max,
		min,
		autoComplete,
		inputClassName,
		isErrorShow,
		readOnly,
		isEmptySpaceErrorShow
	} = props;
	return (
		<div className={`input-field_wrapper width--full ${className || ''}`}>
			<div className='flex justify-content--between width--30'>
				{!!title && (
					<p
						className={`input-title ${isErrorShow && !isEmptySpaceErrorShow ? 'required-title' : ''
							} pb--5 mr--10`}
					>
						{title}
					</p>
				)}
			</div>
			<div className='flex flex--column'>
				<input
					className={`input-field ${inputClassName || ''}`}
					type={type}
					name={name}
					id={id}
					placeholder={placeholder}
					value={getValue(value)}
					onChange={({ target }) => onChange && onChange(target.value)}
					autoFocus={autoFocus}
					disabled={disabled}
					maxLength={max}
					minLength={min}
					autoComplete={autoComplete}
					readOnly={readOnly}
				/>
				{(isErrorShow || isEmptySpaceErrorShow) && <ErrorMessageHandler name={name} />}
			</div>
		</div>
	);
};

export default Input;

const getValue = (value: string | number) => {
	if (value === undefined || value === null) {
		return '';
	}
	return value;
};
