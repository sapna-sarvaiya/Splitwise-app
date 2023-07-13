import { useEffect, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";

import ExpenseForm from "../../../shared/components/modal/expenseFormModal";
import { IExpense } from "../interface/expense.interface";
import * as CommonActions from '../../../store/common.action';
import { IAction, IState } from "../../../shared/interface/state";

import ExpenseList from "../component/expenseList";

const Expense: React.FC = () => {
  const [expenses, setExpenses] = useState<IExpense[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();
  useEffect(() => {
    const storedExpenses = localStorage.getItem('expenses');
    if (storedExpenses) {
      setExpenses(JSON.parse(storedExpenses));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const handleAddExpense = (expense: IExpense) => {
    setExpenses([...expenses, expense]);
  };

  const closeModel = () => {
    setIsModalOpen(false);
  }

  return (
    <>
      <div className="container">
        <button className="btn back-btn" onClick={() => navigate(-1)}>Back</button>
        <div className="flex align-items--center justify-content--between mb--30">
          <p className="font--semi-bold">Expense List</p>
          <button className="btn btn--bg font--bold" onClick={() => setIsModalOpen(true)}>Add Expense</button>
        </div>
        <ExpenseList expenses={expenses} />
      </div>
      {
        isModalOpen && (
          <ExpenseForm isModalOpen={isModalOpen} member={state?.members} onAddExpense={handleAddExpense} closeModel={closeModel} />
        )
      }
    </>
  )

}

interface IDispatchProps {
  addExpense: (expense: IExpense) => void;
}
const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, IAction>): IDispatchProps => {
  return {
    addExpense: (expense: IExpense) => dispatch(CommonActions.addExpense(expense))
  };
};

export default connect<any, IDispatchProps, any, IState>(null, mapDispatchToProps)(Expense);