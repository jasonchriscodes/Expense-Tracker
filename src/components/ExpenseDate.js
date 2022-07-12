import React from "react";
import "./ExpenseDate.css";

function ExpenseDate(props) {
  const day = props.date.toLocaleString("en-US", { day: "2-digit" }); // 2-digit is the number of digits to show
  const month = props.date.toLocaleString("en-US", { month: "long" }); // long is full name
  const year = props.date.getFullYear(); // getFullYear() returns the year as a four digit number
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
