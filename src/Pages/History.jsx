import React from 'react'

export default function History({expenses,deleteExpense}) {
  return (
   <div className="p-4">
      <h1 className="text-xl font-bold mb-4">History</h1>

      {expenses.length === 0 ? (
        <p>No expenses</p>
      ) : (
        expenses.map((exp, index) => (
          <div
            key={index}
            className="border p-3 mb-2 rounded flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">{exp.title}</p>
              <p>₹{exp.amount}</p>
              <p className="text-sm text-gray-500">{exp.category}</p>
            </div>

            <button
              onClick={() => deleteExpense(index)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  )
}
