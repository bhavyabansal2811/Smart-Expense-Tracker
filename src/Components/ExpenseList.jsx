import React,{useState} from 'react'
//expenses ek object hai
function ExpenseList({expenses}) {
    if (expenses.length==0){
        return(
            <p className='text-gray-400 mt-7'>No expenses yet...</p>
        )
    }
  return (
    <div>
        {
            expenses.map((expense)=>(
                <div key={expense.id} className="flex justify-between items-center border border-gray-200 rounded-md p-3">
                    <span className='font-medium '>₹{expense.amount}</span>
                    <span className='text-gray-500'>{expense.category}</span>
                    <span className='text-gray-400 text-sm'>{expense.date}</span>
                </div>
            ))
        }
    </div>
  )
}

export default ExpenseList