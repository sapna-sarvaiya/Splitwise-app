import { CSSProperties } from 'react';


// reactSelectStyles - css style object for react-select

const PaginationStyles = {
	// none of react-selects styles are passed to <View />
	container: (base: CSSProperties) => ({
		...base,
		fontSize: '14px',
		fontWeight: '600',
		minHeight: '32px',
		minWidth: '80px',
		display: 'flex'
	}),

	control: (base: CSSProperties) => ({
		...base,
		backgroundColor: '#fffff',
		width: '100%',
		minHeight: '0',
		border: 'none',
		boxShadow: 'none'
	}),

	valueContainer: (base: CSSProperties) => ({
		...base,
		padding: '0 8px'
	}),

	singleValue: (base: CSSProperties) => ({
		...base,
		color: '#ffffff'
	}),

	indicatorSeparator: () => ({
		display: 'none'
	}),

	clearIndicator: (base: CSSProperties) => ({
		...base,
		cursor: 'pointer'
	}),

	dropdownIndicator: (base: CSSProperties, state: any) => ({
		...base,
		padding: '0 8px',
		cursor: 'pointer',
		transition: 'all 0.2s ease',
		transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'none',
		color: state.selectProps.menuIsOpen && '#ffffff',
		':hover': {
			color: '#ffffff'
		}
	}),

	menu: (base: CSSProperties) => ({
		...base,
		backgroundColor: '#ffffff',
		margin: '5px 0'
	}),

	menuList: (base: CSSProperties) => ({
		...base,
		padding: '0'
	}),

	option: (base: CSSProperties, state: any) => ({
		...base,
		padding: '8px',
		margin: '3px',
		width: 'inherit',
		backgroundColor: state.isSelected ? '#ED6A29' : state.isFocused ? 'transparent' : '',
		borderRadius: '4px',
		':active': {
			backgroundColor: '#ED6A29'
		},
		':hover': {
			backgroundColor: '#ED6A29',
			opacity: state.isSelected ? '' : '0.8',
			transition: 'all 0.1s linear'
		}
	})
};

const multiReactSelectStyles = {
	// none of react-selects styles are passed to <View />
	container: (base: CSSProperties) => ({
		...base,
		height: '40px',
		fontWeight: '400',
		border: '1px solid #464748',
		backgroundColor: '#ffffff',
		borderRadius: '100px',
		display: 'flex',
		cursor: 'pointer'
	}),

	placeholder: (base: CSSProperties) => ({
		...base,
		fontSize: '14px',
		color: '#18191a'
	}),

	control: (base: CSSProperties) => ({
		...base,
		width: '100%',
		backgroundColor: '##ffffffa1',
		border: 'none',
		boxShadow: 'none',
		margin: '0 15px',
		padding: '5px 0',
		borderRadius: '100px',
		minHeight: 'auto',
		cursor: 'pointer'
	}),

	valueContainer: (base: CSSProperties) => ({
		...base,
		padding: '0 8px',
		height: '100%',
		overflowY: 'auto'
	}),

	input: (base: CSSProperties) => ({
		...base,
		color: '#000000',
		width: '5px'
	}),

	singleValue: (base: CSSProperties) => ({
		...base,
		color: '#000000'
	}),

	multiValue: (base: CSSProperties) => ({
		...base,
		color: '#000000',
		backgroundColor: '#00800033',
		fontWeight: '500'
	}),

	multiValueLabel: (base: CSSProperties) => ({
		...base,
		color: '#000000',
		letterSpacing: '1px'
	}),

	multiValueRemove: (base: CSSProperties) => ({
		...base,
		color: '#000000',
		':hover': {
			backgroundColor: '#00800033'
		}
	}),

	indicatorSeparator: () => ({
		display: 'none'
	}),

	clearIndicator: (base: CSSProperties) => ({
		...base,
		cursor: 'pointer',
		padding: '0',
		color: '#808080',
		':hover': {
			color: '#808080'
		}
	}),

	dropdownIndicator: (base: CSSProperties, state: any) => ({
		...base,
		padding: '0',
		cursor: 'pointer',
		transition: 'all 0.2s ease',
		transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'none',
		color: '#808080',

		display: state.selectProps.isDisabled ? 'none' : 'flex'
	}),

	menu: (base: CSSProperties) => ({
		...base,
		backgroundColor: '#ffffff',
		border: '1px solid #464748',
		margin: '5px 0',
		borderRadius: '10px',
		scrollBarWidth: 'none',
		zIndex: '3'
	}),

	menuList: (base: CSSProperties) => ({
		...base,
		padding: '0'
	}),

	option: (base: CSSProperties, state: any) => ({
		...base,
		padding: '8px',
		margin: '3px',
		width: 'inherit',
		color: '#000000',
		borderRadius: '4px',
		scrollBarWidth: 'none'
	})
};

const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);


export {
	PaginationStyles,
	multiReactSelectStyles,
	isSafari,
};
