import { NavigateFunction } from 'react-router-dom';

export interface IResponseObject<T> {
	code: number;
	message: string;
	data: T;
}

export interface IFeaturesLists {
	label: string;
	link: string;
}

export interface IPagination {
	page: number;
	currentPage: number;
	nextPage: number;
	totalPages: number;
	recordPerPage: number;
	remainingCount: number;
	total: number;
}

export interface ISelectedItem {
	selected: number;
}

export interface IDropDownOptions {
	label: string;
	value: string | number;
}
export interface ISortingConfig {
	sortBy: string;
	orderBy: string;
}

export interface ITableColumn {
	key?: string;
	sortable: boolean;
	heading: string;
	className: string;
}

export interface IPlayer {
	id: string;
	fullName: string;
	avatar: string | null;
	height: string | null;
	weight: string | null;
	yards: string;
	raScore: string;
	igaScore: string;
	productionScore: string;
}

export interface IQuickNoteTableColumn {
	key?: string;
	heading: string;
}

export interface IRouteComponentParams {
	location: Location;
	navigate: NavigateFunction;
	match: {
		params: {
			[key: string]: any;
		};
	};
}

export type ObjectType = { [key: string]: any } | string | number;

export interface IModelState {
	open: boolean;
	type: string;
}
