import React,{useState} from 'react'
import ExpenseForm from '../Components/ExpenseForm'
import ExpenseList from '../Components/ExpenseList'
import Summary from '../Components/Summary'

export default function AddExpense({expenses,addexpense}) {
  // const [expenses,setExpenses]=useState([])
  // function addexpense(expense){
  //   console.log("called",expenses)
  //   setExpenses((prev)=>[...prev,expense])
  // }
  
  return (
    <div>
      <ExpenseForm addexpense={addexpense}/>
      
      <Summary expenses={expenses}/>
      {/* WE didnt pass setExpenses because it may  Breaks component separation */}
      <ExpenseList expenses={expenses}/>

    </div>
  )
}
