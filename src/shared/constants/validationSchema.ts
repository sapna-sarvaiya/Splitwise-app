import * as Yup from 'yup';

const ExpenseFormValidation = Yup.object().shape({
	description: Yup.string().required('Please Enter description').strict(true),
	amount: Yup.number().required('Please Enter amount').strict(true),
	payer: Yup.string().required('select payer').strict(true),
	participants: Yup.array().required('select participants').strict(true),
});

export {
	ExpenseFormValidation,
};
