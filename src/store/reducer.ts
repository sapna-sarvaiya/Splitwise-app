import { combineReducers } from 'redux';
import expenseReducer from './expenseReducer';

const rootReducer = combineReducers({
	expense: expenseReducer,
});

export default rootReducer;
