import React from 'react';
import CTableRow from './CTableRow';
import CTableCell from './CTableCell';

interface IProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement> {
	text?: string;
	colSpan: number;
}

const CTableEmptyContainer: React.FC<IProps> = (props) => (
	<CTableRow>
		<CTableCell colSpan={props.colSpan}>
			<div className='empty-data-wrapper width--full flex align-items--center mt--30 mb--30 justify-content--center'>
				<p className='text--primary font--medium font-size--24 text--center '>{props.text}</p>
			</div>
		</CTableCell>
	</CTableRow>
);

export default CTableEmptyContainer;
