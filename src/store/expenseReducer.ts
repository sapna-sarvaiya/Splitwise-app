// expenseReducer.js

import { IState } from "../shared/interface/state";
import { ADD_EXPENSE } from "./actionTypes";

const initialState: IState = {
    expenses: [],
};

const expenseReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return {
        ...state,
        expenses: [...state.expenses, action.payload]
      };
    default:
      return state;
  }
};

export default expenseReducer;
