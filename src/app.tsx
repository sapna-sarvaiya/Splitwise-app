import { Navigate, Route, Routes } from "react-router-dom";
import "./assets/styles/app.scss";
import Group from "./features/ExpenseFormCard/container/expenseGroupContainer";
import Expense from "./features/ExpenseFormCard/container/expenseContainer";

const App = () => {
    return (
        <div className="main">
            <Routes>
                <Route path="*" element={<Navigate replace to="/home" />} />
                <Route path="/home" element={<Group />} />
                <Route path='/expense' element={<Expense />} />
            </Routes>
        </div>
    );
};

export default App;
