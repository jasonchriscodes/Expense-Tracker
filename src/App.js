import ExpenseItem from "./components/ExpenseItem";

function App() {
  // imperative JS approach, cumbersome
  // const para = document.createElement("p");
  // para.textContent = "This is also visible";
  // document.getElementById("root").append(para);
  return (
    // simplify using JSX (lower case element are build in html element while upper case are define by dev)
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
