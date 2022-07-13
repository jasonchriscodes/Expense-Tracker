import React from "react";
import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  // imperative JS approach, cumbersome
  // const para = document.createElement("p");
  // para.textContent = "This is also visible";
  // document.getElementById("root").append(para);

  // using JSX code
  return (
    // simplify using JSX (lower case element are build in html element while upper case are define by dev)
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );

  // OR
  // using react object
  return React.createElement(
    "div",
    {},
    React.createElement("h2", {}, "Let's get started!"),
    React.createElement(Expenses, { items: expenses })
  );
}

export default App;
