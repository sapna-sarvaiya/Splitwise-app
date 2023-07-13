import React, { useEffect, useState } from 'react';
import { Modal } from 'antd';

import { IExpense, IParticipants } from '../../../features/ExpenseFormCard/interface/expense.interface';

interface IProps {
	isModalOpen: boolean;
	closeModel: () => void;
	expenseId: string;
}

const SettleUpExpense: React.FC<IProps> = (props) => {
	const { isModalOpen, closeModel, expenseId } = props
	const [expense, setExpense] = useState<IExpense[]>([]);
	const [confirmName, setIsConfirmName] = useState('');
	const [expenseDetails, setExpenseDetails] = useState<IExpense>();
	const modalFooter = null;

	useEffect(() => {
		const storedExpense = localStorage.getItem('expenses');
		if (storedExpense) {
			setExpense(JSON.parse(storedExpense));
		}
	}, []);

	useEffect(() => {
		if (expense && expense.length > 0) {
			const list = expense.find((expense: IExpense) => expense.id === expenseId)
			setExpenseDetails(list);
		}
	}, [expense, expenseId]);

	const handleSettledExpense = (id: string) => {
		const updatedExpense = expense.map((exp: IExpense) => {
			if (exp.id === id) {
				return {
					...exp,
					isSettled: true,
					splitAmount: 0
				};
			}
			return exp;
		});
		setExpense(updatedExpense);
		localStorage.setItem('expenses', JSON.stringify(updatedExpense));
		closeModel();
	};

	const handleSettleParticipant = (name: string) => {
		const updatedExpenses = expense.map((exp: IExpense) => {
			if (exp.id === expenseId) {
				const updatedParticipants = exp.participants.map((participant) => {
					if (participant.name === name) {
						return {
							...participant,
							splitAmount: 0,
						};
					}
					return participant;
				});

				return {
					...exp,
					participants: updatedParticipants,
				};
			}
			return exp;
		});
		setExpense(updatedExpenses);
		localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
	};


	return (
		<div className='position--relative'>
			<Modal title="SettleUp Expense" open={isModalOpen} footer={modalFooter} onCancel={closeModel}>
				{expenseDetails && (
					<>
						<div className='flex align-items--center justify-content--between mb--10'>
							<p>
								Total amount : <span className='font--semi-bold'>{expenseDetails.amount} rupees</span>
							</p>
							<p>
								Paid by : <span className='font--semi-bold'>{expenseDetails.payer}</span>
							</p>
						</div>
						<div>
							{expenseDetails.participants.map((participant: IParticipants, index: number) => (
								<div className='mb--10' key={index}>
									<p className='font--semi-bold'>{participant.name}</p>
									{participant.name === expenseDetails.payer ? <p className='text--green font-size--sm'>Received {participant.splitAmount} rupees</p> : <p className='text--red font-size--sm cursor--pointer' onClick={() => setIsConfirmName(participant.name)}>Owes {participant.splitAmount} rupees</p>}
									{confirmName === participant.name && participant.splitAmount !== 0 && (
										<div className='flex align-items--center'>
											<p className='text--grey-300 mr--10'>Pay to <span className='font--bold'>{expenseDetails.payer}</span> <span className='text--red'>{expenseDetails.splitAmount} rupees</span></p>
											<button className='btn btn--width btn--bg btn--small' onClick={() => { setIsConfirmName(''); handleSettleParticipant(participant.name) }}>Ok</button>
										</div>
									)}
									{confirmName === participant.name && participant.splitAmount === 0 && (
										<p>no pending debts!
											check others for payments...</p>
									)}
								</div>
							))}
						</div>
						<div className='flex align-items--center justify-content--end'>
							<button className='btn btn--bg btn--width' onClick={() => { handleSettledExpense(expenseDetails.id) }}>Settled Expense</button>

						</div>
					</>
				)
				}
			</Modal>
		</div>
	);
};

export default SettleUpExpense;
