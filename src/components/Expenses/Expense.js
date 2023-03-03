import "./Expense.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

function Expense(props) {
  return (
    <Card className="expenses">
      {props.item.map((expense) => (
        <ExpenseItem
          key={Math.random()}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default Expense;
