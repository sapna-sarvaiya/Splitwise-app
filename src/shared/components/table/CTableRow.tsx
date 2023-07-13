import React from 'react';

interface IProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement> {
	className?: string;
}

const CTableRow: React.FC<IProps> = (props) => {
	return <tr className={['table-row text--center', props.className].join(' ')}>{props.children}</tr>;
};

export default CTableRow;
