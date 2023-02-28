import "./ExpenseForm.css";

function ExpenseForm() {
  const changetitle = (event) => {
    console.log(event.target.value);
  };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={changetitle} placeholder="Enter text" />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" placeholder="Enter text" />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" placeholder="Enter text" />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add</button>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;
