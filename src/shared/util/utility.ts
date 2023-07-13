import { ThunkDispatch } from 'redux-thunk';
import _ from 'lodash';

import { isSafari } from "../constants/constants";
import { IDropDownOptions } from "../interface";
import { IAction } from "../interface/state";

/**
 * create action creator
 * @param ACTION - type of action
 * @param data - data
 */
export const createAction = (ACTION: string, data: any = null): IAction => ({
	type: ACTION,
	payload: data
});

/**
 * create loading selector
 * @param actions - actions to dispatch
 */
/**
 * dispatch action after given time (to handle some events like close modal after success api call)
 * @param dispatch - dispatch object
 * @param action - action type
 * @param time - time after which action is to be dispatched (default - 100ms)
 */
export const dispatchActionAfterTime = (
	dispatch: ThunkDispatch<unknown, unknown, IAction>,
	action: string,
	time = 100
) => {
	setTimeout(() => {
		dispatch(createAction(action));
	}, time);
};

export const debounce = (func: any, wait = 500) => {
	let h: NodeJS.Timeout;
	return (...args: any) => {
		clearTimeout(h);
		h = setTimeout(() => func(...args), wait);
	};
};

let scrollPosition = 0;

const body = document.getElementsByTagName('body')[0];
export const handleAddOverflow = (oldScrollValue = 0) => {
	const webAppContentWrapper = document.getElementsByClassName('wrapper')[0] as HTMLDivElement;

	if (body) {
		if (isSafari) {
			if (oldScrollValue) {
				window.scrollTo({ top: oldScrollValue });
			}
			scrollPosition = window.pageYOffset;
			document.body.style.top = `-${oldScrollValue || scrollPosition}px`;
			body.classList.add('lock-position');
			if (webAppContentWrapper) {
				const topPosition = oldScrollValue || scrollPosition;
				webAppContentWrapper.style.top = topPosition > 0 ? `-${topPosition - 88}px` : '88px';
				webAppContentWrapper.classList.add('lock-position');
			}
		} else {
			body.classList.add('overflow--hidden');
			webAppContentWrapper && webAppContentWrapper.classList.add('overflow--hidden');
		}
	}
};

export const handleRemoveOverflow = () => {
	const webAppContentWrapper = document.getElementsByClassName('wrapper')[0] as HTMLDivElement;
	if (body) {
		if (isSafari) {
			body.classList.remove('lock-position');
			document.body.style.removeProperty('top');
			if (webAppContentWrapper) {
				webAppContentWrapper.style.removeProperty('top');
				webAppContentWrapper.classList.remove('lock-position');
				webAppContentWrapper.scrollTo({ top: scrollPosition });
			}
			window.scrollTo({ top: scrollPosition });
		} else {
			body.classList.remove('overflow--hidden');
			webAppContentWrapper && webAppContentWrapper.classList.remove('overflow--hidden');
		}
	}
};

export const selectedOption = (options: IDropDownOptions[], value: string | number | string[]) => {
	if (Array.isArray(value)) {
		return options.filter((option) => value.includes(option.value as string));
	}
	return options.filter((option) => option.value === value);
};

export const formatValue = (value: string | number | null) => {
	const formatedValue =
		value && !value.toString().includes('undefined') && !value.toString().includes('null') ? value : '-';
	return formatedValue;
};