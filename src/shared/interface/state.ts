import { IExpense } from "../../features/ExpenseFormCard/interface/expense.interface";


export interface IState {
	loading?: ILoadingState;
	model?: IModelState;
	expenses: IExpense[];
}

export interface ILoadingState {
	api: {
		[key: string]: boolean;
	};
}

export interface IAction {
	type: string;
	payload: any;
}



export interface IModelState {
	isOpen: boolean;
	type: string;
}

export interface INotificationData {
	sendNotificationId: string;
	prospectListId: string;
	coachUserId: string;
	createdCoachAvatar: string;
	message: string;
	isRead: boolean;
	createdDate: string;
}

export interface INotification {
	notificationCount: number;
	data: INotificationData[];
}

export interface ISortingConfig {
	sortBy: string;
	orderBy: string;
}