import { useState } from "react"

import './ExpenseForm.css';

const initialUserInput = {
	title: "",
	amount: 0,
	date: "",
}

const ExpenseForm = (props) => {
    const [userInput, setUserInput] = useState(initialUserInput);

    const submitHandler = (event) => {
        event.preventDefault();

        userInput.date = new Date(userInput.date);
        props.onSaveExpenseData(userInput);
        
        setUserInput(initialUserInput); // clear form
    }

    const titleChangeHandler = (event) => {
		setUserInput(prevState => ({
			...prevState,
			title: event.target.value,
		}))
	};

	const amountChangeHandler = (event) => {
		setUserInput(prevState => ({
			...prevState,
			amount: event.target.value,
		}))
	}

	const dateChangeHandler = (event) => {
		setUserInput(prevState => ({
			...prevState,
			date: event.target.value,
		}))
	}


    return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className={"new-expense__control"}>
					<label htmlFor="title">Title</label>
					<input type="text" id={"title"} onChange={titleChangeHandler} value={userInput.title} />
				</div>

				<div className={"new-expense__control"}>
					<label htmlFor="amount">Amount</label>
					<input type="number" id={"amount"} min={"0.01"} step={"0.01"} onChange={amountChangeHandler} value={userInput.amount} />
				</div>

				<div className={"new-expense__control"}>
					<label htmlFor="date">Date</label>
					<input type="date" id={"date"} min={"2021-01-01"} max={"2023-12-31"} onChange={dateChangeHandler} value={userInput.date} />
				</div>
			</div>

			<div className={"new-expense__actions"}>
                <button type="button" onClick={props.onCancel}>Cancel</button>
				<button type={"submit"}>Add Expense</button>
			</div>
		</form>
	)
}

export default ExpenseForm;