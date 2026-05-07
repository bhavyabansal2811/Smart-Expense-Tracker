import React from "react";

export default function History({ expenses, deleteExpense }) {
  return (
    <div className="p-4 max-w-xl mx-auto">
      
      <h1 className="text-xl font-semibold mb-4">
        Expense History
      </h1>

      {expenses.length === 0 ? (
        <p className="text-gray-500 text-center mt-6">
          No expenses yet
        </p>
      ) : (
        <div className="space-y-3">
          {expenses.map((exp, index) => (
            
            <div
              key={index}
              className="flex justify-between items-center border p-3 rounded-lg"
            >
              
              <div>
                <p className="font-medium">{exp.title}</p>
                <p className="text-sm text-gray-600">₹{exp.amount}</p>
                <p className="text-xs text-gray-400">{exp.category}</p>
              </div>

              <button
                onClick={() => deleteExpense(index)}
                className="text-red-500 text-sm"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}