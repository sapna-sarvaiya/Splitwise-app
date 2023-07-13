import React from 'react';

interface IProps {
	className?: string;
	children: JSX.Element;
}

const CTableHead: React.FC<IProps> = (props) => {
	return <thead className={['table-head no--border', props.className].join(' ')}>{props.children}</thead>;
};

export default CTableHead;
