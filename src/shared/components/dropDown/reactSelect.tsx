import Select, { StylesConfig } from 'react-select';
import { IDropDownOptions } from '../../interface';
import { multiReactSelectStyles } from '../../constants/constants';
import ErrorMessageHandler from '../errorMessageHandler/errorMessageHandler';

interface ISelectDropDownProps {
	title?: string;
	options?: IDropDownOptions[] | IDropDownOptions[][];
	placeholder: string;
	name: string;
	className?: string;
	onChange?: (value: any) => void;
	selectedValue?: IDropDownOptions | IDropDownOptions[] | IDropDownOptions[][];
	isMulti?: boolean;
	selectContainer?: string;
	onFocus?: () => void;
	isDisabled?: boolean;
	isSearchable?: boolean;
	isErrorShow?: boolean;
	isClearable?: boolean;
}

export const ReactSelect: React.FC<ISelectDropDownProps> = (props) => {
	const {
		options,
		placeholder,
		title,
		name,
		className,
		onChange,
		selectedValue,
		isMulti = false,
		selectContainer,
		onFocus,
		isDisabled = false,
		isSearchable,
		isErrorShow = false,
		isClearable = true
	} = props;

	return (
		<div className={['select-field_wrapper flex align-items--center width--full', className].join(' ')}>
			{!!title && (
				<div className='flex width--30'>
					<p className={`select-title ${isErrorShow ? 'required-title' : ''}  pb--5 mr--10`}>
						{title}
					</p>
				</div>
			)}
			<div className='flex flex--column'>
				<Select
					styles={multiReactSelectStyles as StylesConfig}
					value={selectedValue}
					name={name}
					className={['select-field', selectContainer].join(' ')}
					options={options}
					placeholder={placeholder}
					onChange={(value: any) => onChange && onChange(value ? value : '')}
					isMulti={isMulti}
					classNamePrefix='select'
					onFocus={onFocus}
					key={((selectedValue || []) as IDropDownOptions[]).length}
					isDisabled={isDisabled}
					isSearchable={isSearchable}
					isClearable={isClearable && !!selectedValue}
				/>
				{isErrorShow && <ErrorMessageHandler name={name} />}
			</div>
		</div>
	);
};
