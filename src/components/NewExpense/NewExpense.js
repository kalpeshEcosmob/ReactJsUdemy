import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
function NewExpense(props) {
  const dataSaved = (data) => {
    const v = { ...data };
    props.onRecieveData(v);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onsaveData={dataSaved} />
    </div>
  );
}

export default NewExpense;
