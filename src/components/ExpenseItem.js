function ExpenseItem() {
  // only have 1 root element per JSX code (return element)
  // solve it by wrap it all in one div
  return (
    <div>
      <div>June 11th 2022</div>
      <div>
        <h2>Car Insurance</h2>
        <div>$294.67</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
