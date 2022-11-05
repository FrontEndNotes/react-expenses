import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false); // is form visible

	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		}
		props.onAddExpense(expenseData);
	}

    // show form
    const startEditingHandler = () => {
        setIsEditing(true);
    }

    // hide form
    const stopEditingHandler = () => {
        setIsEditing(false);
    }

	return (
        <div className={"new-expense"}>
            {!isEditing && <button type="button" onClick={startEditingHandler}>Add new expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
        </div>
	)
}

export default NewExpense