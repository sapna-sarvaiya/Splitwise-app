import { ADD_EXPENSE } from "./actionTypes";

export const addExpense = (expense: any) => ({
  type: ADD_EXPENSE,
  payload: expense,
});