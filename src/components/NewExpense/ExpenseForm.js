import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [prevTitle, newTitle] = useState("");
  const [prevAmount, newAmount] = useState("");
  const [prevDate, newDate] = useState("");

  const changetitle = (event) => {
    newTitle(event.target.value);
  };
  const changetitle1 = (event) => {
    newAmount(event.target.value);
  };
  const changetitle2 = (event) => {
    newDate(event.target.value);
  };

  const submithandler = (event) => {
    event.preventDefault();
    const values = {
      title: prevTitle,
      amount: prevAmount,
      date: new Date(prevDate),
    };
    props.onsaveData(values);
  };

  return (
    <form onSubmit={submithandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={changetitle} placeholder="Enter text" />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            onChange={changetitle1}
            placeholder="Enter text"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" onChange={changetitle2} placeholder="Enter text" />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add</button>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;
