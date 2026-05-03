import React,{useState} from 'react'
import ExpenseForm from '../Components/ExpenseForm'

export default function AddExpense() {
  const [expenses,setExpenses]=useState([])
  function addexpense(expense){
    setExpenses((prev)=>[...prev,expense])
  }
  console.log(expenses)
  return (
    <div>
      <ExpenseForm addexpense={addexpense}/>
    </div>
  )
}
