import React from 'react';
import { ISortingConfig } from '../../interface';

interface IProps
	extends React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>,
		React.DetailedHTMLProps<React.ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement> {
	header?: boolean;
	onClick?: React.MouseEventHandler<any>;
	className?: string;
	sortable?: boolean;
	heading?: string;
	columnKey?: string;
	sort?: ISortingConfig;
}

const CTableCell: React.FC<IProps> = (props) => {
	let html: JSX.Element;
	const { header, onClick, colSpan, rowSpan, className, sortable } = props;

	if (header) {
		html = (
			<th
				className={[
					`table-cell__header font-size--lg font--semi-bold line-height--20 pl--5 pr--5 ${
						sortable && 'cursor--pointer'
					}`,
					className
				].join(' ')}
				onClick={onClick}
				colSpan={colSpan}
				rowSpan={rowSpan}
			>
				{props.children}
			</th>
		);
	} else {
		html = (
			<td
				className={['table-cell font-size--lg font--semi-bold line-height--20 pl--5 pr--5', className].join(
					' '
				)}
				colSpan={colSpan}
				rowSpan={rowSpan}
				onClick={onClick && onClick}
			>
				{props.children}
			</td>
		);
	}

	return html;
};
export default CTableCell;
