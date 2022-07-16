import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState(""); // listen always a string, even if we enter a number
  const [enteredDate, setEnteredDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value); // stored state
    // setUserInput({
    //   ...userInput, // copy all the other properties
    //   enteredTitle: event.target.value, // change only enteredTitle
    // });
    // use this approach if schedule a lot of state updates at the same time, you could be depending on an outdated or incorrect state snapshot if use above approach. This approach will guarantee that the state snapshot it will always be the latest state snapshot and keeping all scheduled state updates in mind (safer way to ensure always the latest state snapshot)
    // Always use this approach whenever state update depends on the previous state.
    // setUserInput((prevState) => {
    // return {
    //   ...prevState,
    //   enteredTitle: event.target.value,
    // };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput, // copy all the other properties
    //   enteredAmount: event.target.value,
    // });
  };

  const dateChageHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput, // copy all the other properties
    //   enteredDate: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault(); // prevent page reloading

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChageHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
