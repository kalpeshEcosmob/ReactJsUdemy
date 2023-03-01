import React, { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  const [prev, newA] = useState(props.date);

  const clickHandler = () => {
    if (title === props.title) {
      setTitle("Updated");
    } else if (title === "Updated") {
      setTitle(props.title);
    }
    let a = new Date(Date.UTC(2016, 1, 1, 3, 0, 0));
    newA(a);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={prev} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Update</button>
    </Card>
  );
}

export default ExpenseItem;
