import "./App.css";
import Expense from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      title: "Car insurance",
      amount: 275,
      date: new Date(2021, 3, 28).toISOString(),
    },
    {
      title: "Paper",
      amount: 275,
      date: new Date(2021, 3, 28).toISOString(),
    },
    {
      title: "Title 3",
      amount: 275,
      date: new Date(2021, 3, 28).toISOString(),
    },
    {
      title: "Title 4",
      amount: 275,
      date: new Date(2021, 3, 28).toISOString(),
    },
  ];
  return (
    <div>
      <Expense
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></Expense>
      <Expense
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></Expense>
      <Expense
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></Expense>
      <Expense
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></Expense>
    </div>
  );
}

export default App;
