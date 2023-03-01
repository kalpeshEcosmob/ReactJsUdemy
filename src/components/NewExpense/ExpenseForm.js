import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const changetitle = (event) => {
    console.log(event.target.value);
    newTitle(event.target.value);
    newAmount(event.target.value);
    newDate(event.target.value);
  };

  // const onSubmitHandler = (event) => {};

  const [prevTitle, newTitle] = useState("");
  const [prevAmount, newAmount] = useState("");
  const [prevDate, newDate] = useState("");

  const submithandler = (event) => {
    event.preventDefault();
    newTitle(event.target.value);
    const values = {
      title: prevTitle,
      amount: prevAmount,
      date: new Date(prevDate),
    };
    console.log("values are", values);
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
            onChange={changetitle}
            placeholder="Enter text"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" onChange={changetitle} placeholder="Enter text" />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add</button>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;
