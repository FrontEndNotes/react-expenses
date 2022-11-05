import { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DIMMY_EXPENSES = [
    { id: 1, title: 'title #1', amount: 2, date: new Date(2022, 1, 1) },
    { id: 2, title: 'title #2', amount: 0.4, date: new Date(2022, 10, 12) },
    { id: 3, title: 'title #3', amount: 3, date: new Date(2022, 5, 15) },
    { id: 4, title: 'title #4', amount: 11, date: new Date(2022, 3, 17) },
];

function App() {
    const [expenses, setExpenses] = useState(DIMMY_EXPENSES);

    const addExpenseHandler = (expense) => {
        setExpenses(prevState => [expense, ...prevState])
    }

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses items={expenses} />
        </div>
    );
}

export default App;
