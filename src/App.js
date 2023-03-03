import React, { useState } from "react";
import "./App.css";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";
const expenses = [
  {
    title: "Car insurance 1",
    amount: "275",
    date: new Date(Date.UTC(2012, 11, 20, 3, 0, 0)),
  },
  {
    title: "Paper 2",
    amount: "275",
    date: new Date(Date.UTC(2012, 11, 20, 3, 0, 0)),
  },
  {
    title: "Title 3",
    amount: "275",
    date: new Date(Date.UTC(2012, 11, 20, 3, 0, 0)),
  },
  {
    title: "Title 4",
    amount: "275",
    date: new Date(Date.UTC(2012, 11, 20, 3, 0, 0)),
  },
];
function App() {
  const [prevExpenses, newExpenses] = useState(expenses);

  const recieveDateNewExpense = (newExpenseItem) => {
    const newExchange = [newExpenseItem, ...prevExpenses];
    newExpenses(newExchange);
  };

  return (
    <div>
      <NewExpense onRecieveData={recieveDateNewExpense} />
      <Expense item={prevExpenses} />
    </div>
  );
}

export default App;
