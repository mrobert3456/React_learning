import React, { useState } from "react";
import ExpensesList from './ExpensesList'
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2019");

  const filteredExpenses = props.items.filter((x) => {
    return x.date.getFullYear().toString() === filteredYear;
  });

  const yearChangeHandler = (year) => {
    setFilteredYear(year);
  };

  
  return (
    <li>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onYearChange={yearChangeHandler}
        />
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </li>
  );
}

export default Expenses;
