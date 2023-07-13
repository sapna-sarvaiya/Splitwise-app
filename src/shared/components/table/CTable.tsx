import React from 'react';

interface IProps {
	className?: string;
	wrapperClassName?: string;
	// chindren contains 2 elements
	children: JSX.Element[];
}

const CTable: React.FC<IProps> = (props) => {
	return (
		<div className={`table-wrapper ${props.wrapperClassName || ''}`}>
			<table
				className={[
					'table box-size--border-box width--full position--relative border-radius--xxl',
					props.className
				].join(' ')}
			>
				{/** first children must be Table Head */}
				{props.children[0]}
				{/** second children must be Table Body */}
				{props.children[1]}
			</table>
		</div>
	);
};

export default CTable;
