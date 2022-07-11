import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2022, 6, 11);
  const expenseTitle = "Car insurance";
  const expenseAmount = 294.67;

  // only have 1 root element per JSX code (return element)
  // solve it by wrap it all in one div
  // toISOstring() change object to string
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
