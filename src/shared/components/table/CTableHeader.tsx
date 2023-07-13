import React from 'react';
import CTableCell from './CTableCell';
import { PlusIcon, ShortAscIcon, ShortDescIcon, ShortIcon } from '../icons/icons';
import { ISortingConfig } from '../../interface';
import { SortBy } from '../../enum/enum';

interface IProps
	extends React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement> {
	columnKey: string;
	sort?: ISortingConfig;
	onSort?: (column: string) => void;
	className?: string;
	sortable: boolean;
	heading?: string;
	viewMatrix?: () => void;
}

const CTableHeader: React.FC<IProps> = (props) => {
	const { heading, sortable, columnKey, sort, viewMatrix } = props;
	const sortConfig = sort || ({} as ISortingConfig);

	const onClickCell = (sortable: boolean, columnKey: string) => {
		if (!sortable) {
			return;
		}
		props.onSort && props.onSort(columnKey);
	};

	return (
		<CTableCell
			sort={props.sort}
			className={props.className}
			sortable={props.sortable}
			onClick={() => onClickCell(props.sortable, props.columnKey)}
			header={true}
			heading={props.heading}
			columnKey={props.columnKey}
		>
			<>
				<div className='flex align-items--center justify-content--center'>
					<p className='table-cell-info'>{heading}</p>
					{sortable && (
						<>
							{sortConfig.sortBy === SortBy.Asc && sortConfig.orderBy === columnKey && (
								<ShortAscIcon className='fill--white short--icon ml--5' />
							)}
							{sortConfig.sortBy === SortBy.Desc && sortConfig.orderBy === columnKey && (
								<ShortDescIcon className='fill--white short--icon ml--5' />
							)}
							{sortConfig.orderBy !== columnKey && (
								<ShortIcon className='fill--white short--icon ml--5' />
							)}
						</>
					)}
					{viewMatrix && columnKey === 'igaScore' && (
						<div
							className='matrix-icon_wrapper flex align-items--center justify-content--center bg--white ml--5 cursor--pointer mr--5'
							onClick={(e) => {
								e.stopPropagation();
								viewMatrix && viewMatrix();
							}}
						>
							<PlusIcon className='icon stroke--primary' />
						</div>
					)}
				</div>
				{props.children}
			</>
		</CTableCell>
	);
};

export default CTableHeader;
