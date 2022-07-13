import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  // function clickHandler(){
  //   console.log("Clicked!!!");
  // }

  //OR

  const clickHandler = () => {
    console.log("Clicked!!!");
  };

  // only have 1 root element per JSX code (return element)
  // solve it by wrap it all in one div
  // toISOstring() change object to string
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;