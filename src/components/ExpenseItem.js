import "./ExpenseItem.css";

function ExpenseItem() {
  // only have 1 root element per JSX code (return element)
  // solve it by wrap it all in one div
  return (
    <div className="expense-item">
      <div>June 11th 2022</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">$294.67</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
