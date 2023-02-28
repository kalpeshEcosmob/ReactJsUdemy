import "./App.css";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      title: "Car insurance",
      amount: 275,
      date: new Date(Date.UTC(2012, 11, 20, 3, 0, 0)),
    },
    {
      title: "Paper",
      amount: 275,
      date: new Date(Date.UTC(2012, 11, 20, 3, 0, 0)),
    },
    {
      title: "Title 3",
      amount: 275,
      date: new Date(Date.UTC(2012, 11, 20, 3, 0, 0)),
    },
    {
      title: "Title 4",
      amount: 275,
      date: new Date(Date.UTC(2012, 11, 20, 3, 0, 0)),
    },
  ];
  return (
    <div>
      <NewExpense />
      <Expense item={expenses} />
    </div>
  );
}

export default App;
