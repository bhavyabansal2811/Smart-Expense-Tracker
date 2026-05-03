import React, { useState } from "react";

function ExpenseForm({addexpense}) {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [date, setDate] = useState("");
  
  //HANDLE SUBMIT KE LIYE
  function handleSubmit(){
    if(!date || !category){
      alert("Fill all the details")
      return
    }
    const expense={
      id:Date.now(),
      amount:Number(amount),
      category,
      date
    }
    //ye value addexpense naam ke ek function me pass ho rha hai jo addexpense.jsx me hai
    addexpense(expense);

    //taki submit hoone ke baad sb default value pr aa jaiye
    setAmount("");
    setCategory("Food");
    setDate("")


  }

  return (
    <div className="max-w-md mx-auto mt-10">
      <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-800 mb-5">
          Add Expense
        </h2>

        <div className="mb-4">
          <label className="block text-sm text-gray-600 mb-1">Amount</label>
          <input
            type="number"
            placeholder="e.g. 679"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm text-gray-600 mb-1">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 text-sm bg-white focus:outline-none focus:ring-1 focus:ring-gray-400"
          >
            <option>Food</option>
            <option>Travel</option>
            <option>Shopping</option>
            <option>Others</option>
          </select>
        </div>
        <div className="mb-5">
          <label className="block text-sm text-gray-600 mb-1">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gray-900 text-white text-sm py-2 rounded-md hover:bg-gray-800 transition"
        >
          Add Expense
        </button>
      </form>
    </div>
  );
}

export default ExpenseForm;
