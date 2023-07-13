import ReactPaginate from 'react-paginate';
import Select, { StylesConfig } from 'react-select';

import { PaginationStyles } from '../../constants/constants';
import { IPagination, ISelectedItem } from '../../interface';

interface IProps {
	dataLength: number;
	pagination: IPagination;
	onPageChange: (selectedNumber: number) => void;
	onPerPageChange?: (perPageData: number) => void;
	perPageOption?: boolean;
	className?: string;
}

const PageOptions = [
	{ label: '10', value: 10 },
	{ label: '25', value: 25 },
	{ label: '50', value: 50 },
	{ label: '100', value: 100 }
];

const CTablePagination = (props: IProps) => (
	<>
		{props.pagination.totalPages > 1 && (
			<div
				className={`table-pagination flex align-items--center mt--20 mb--20 ${
					props.perPageOption ? 'justify-content--between' : 'justify-content--end'
				} ${props.className}`}
			>
				{!!props.perPageOption && (
					<Select
						className='select-field'
						classNamePrefix='react-select'
						styles={PaginationStyles as StylesConfig}
						options={PageOptions}
						isSearchable={false}
						isDisabled={props.dataLength < 10}
						menuPlacement='auto'
						defaultValue={PageOptions[0] as any}
						onChange={({ value }) => props.onPerPageChange && props.onPerPageChange(value)}
					/>
				)}
				<ReactPaginate
					forcePage={props.pagination.currentPage - 1}
					previousLabel='&#10092;'
					previousClassName={`paginate-btn ${props.pagination.currentPage === 1 ? 'prev-class' : ''}`}
					nextClassName={`paginate-btn ${
						props.pagination.currentPage === props.pagination.totalPages ? 'prev-class' : ''
					}`}
					nextLabel='&#10093;'
					breakLabel={'...'}
					pageCount={props.pagination.totalPages}
					marginPagesDisplayed={1}
					containerClassName={'pagination-wrapper flex justify-content--end align-items--center no--margin'}
					activeClassName={'active-paginate-btn'}
					disableInitialCallback={true}
					onPageChange={(selectedItem: ISelectedItem) => props.onPageChange(selectedItem.selected)}
				/>
			</div>
		)}
	</>
);

export default CTablePagination;
