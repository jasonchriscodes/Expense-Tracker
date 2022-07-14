import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  /**
   * State is used if we have data that changes should be reflected on the user interface
   * Use state return 2 values:
   * 1. the current value of the state (title)
   * 2. a function to update the state (setTitle)
   */
  const [title, setTitle] = useState(props.title);
  console.log("ExpenseItem evaluated by React");

  // function clickHandler(){
  //   console.log("Clicked!!!");
  // }

  //OR

  const clickHandler = () => {
    setTitle("Updated!!!");
    console.log(title);
  };

  // only have 1 root element per JSX code (return element)
  // solve it by wrap it all in one div
  // toISOstring() change object to string
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
