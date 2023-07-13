export interface IExpense {
	id: string;
	description: string;
	amount: number;
	person: string;
	participants: IParticipants[];
	splitAmount: number;
	createdDate: any;
	isSettled: boolean;
};
export interface IParticipants {
	name: string;
	splitAmount: number
}
export interface IUser {
	id: string;
	name: string;
};

export interface IGroup {
	id: string
	name: string
	members: IUser[]
}

export interface IDropDownOption {
	label: string;
	value: string | number;
}

export const ExpenseListColumns = [
	{
		key: 'description',
		sortable: false,
		heading: 'Description',
		className: 'width--8'
	},
	{
		key: 'payer',
		sortable: false,
		heading: 'Paid By',
		className: 'width--7'
	},
	{
		key: 'participant',
		sortable: false,
		heading: 'Participant',
		className: 'width--12'
	},
	{
		key: 'amount',
		sortable: false,
		heading: 'Amount',
		className: 'width--7'
	},
	{
		key: 'createdDate',
		sortable: false,
		heading: 'Created On',
		className: 'width--7'
	},
	{
		key: 'hr',
		sortable: false,
		heading: '',
		className: 'width--0'
	},
	{
		key: 'options',
		sortable: false,
		heading: 'Action',
		className: 'width--10'
	}
];