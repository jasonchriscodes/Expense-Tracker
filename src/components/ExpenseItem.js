import "./ExpenseItem.css";

function ExpenseItem(props) {
  const day = props.date.toLocaleString("en-US", { day: "2-digit" }); // 2-digit is the number of digits to show
  const month = props.date.toLocaleString("en-US", { month: "long" }); // long is full name
  const year = props.date.getFullYear(); // getFullYear() returns the year as a four digit number
  // only have 1 root element per JSX code (return element)
  // solve it by wrap it all in one div
  // toISOstring() change object to string
  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
