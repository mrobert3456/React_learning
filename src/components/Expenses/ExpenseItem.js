import React from 'react';
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card"
import "./ExpenseItem.css";

function ExpenseItem(props) {

   //const [title,setTitle]= useState(props.title); //React hook to update view, only to be called in component functions!!
   // first param = current state value, second param= method to change title
    
    //const clickHandler =()=>{
    //  setTitle('hihi');
     // console.log(title);
    //};

    return (
    <Card className="expense-item">
       <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
