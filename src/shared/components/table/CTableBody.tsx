import React from 'react';

interface IProps extends React.PropsWithChildren {
	className?: string;
}

const CTableBody: React.FC<IProps> = (props) => {
	return <tbody className={['table-body', props.className].join(' ')}>{props.children}</tbody>;
};

export default CTableBody;
