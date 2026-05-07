import React, { useState, useEffect } from "react";

export default function Budget({ expenses }) {

  // Budget value
  const [budget, setBudget] = useState("");

  // Input field value
  const [input, setInput] = useState("");

  // -------------------------------
  // LOAD BUDGET FROM LOCAL STORAGE
  // -------------------------------
  useEffect(() => {
    const savedBudget = localStorage.getItem("budget");

    if (savedBudget) {
      setBudget(Number(savedBudget));
    }
  }, []);

  // -------------------------------
  // SAVE BUDGET TO LOCAL STORAGE
  // -------------------------------
  useEffect(() => {
    localStorage.setItem("budget", budget);
  }, [budget]);

  // -------------------------------
  // SAVE BUTTON FUNCTION
  // -------------------------------
  function saveBudget() {
    setBudget(Number(input));
    setInput("");
  }

  // -------------------------------
  // TOTAL MONEY SPENT
  // -------------------------------
  const totalSpent = expenses.reduce(
    (sum, exp) => sum + Number(exp.amount),
    0
  );

  // -------------------------------
  // REMAINING MONEY
  // -------------------------------
  const remaining = budget - totalSpent;

  // -------------------------------
  // PERCENTAGE USED
  // -------------------------------
  const percentage =
    budget > 0
      ? Math.min((totalSpent / budget) * 100, 100)
      : 0;

  return (
    <div className="max-w-3xl mx-auto p-6">

      {/* PAGE TITLE */}
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Budget Goals
      </h1>

      {/* INPUT SECTION */}
      <div className="flex gap-4 mb-8">

        <input
          type="number"
          placeholder="Enter Monthly Budget"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border border-gray-300 p-3 rounded-xl w-full outline-none"
        />

        <button
          onClick={saveBudget}
          className="bg-black text-white px-6 rounded-xl hover:bg-gray-800"
        >
          Save
        </button>

      </div>

      {/* SUMMARY CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">

        {/* BUDGET CARD */}
        <div className="bg-white shadow-md rounded-2xl p-5">

          <h2 className="text-gray-500 mb-2">
            Monthly Budget
          </h2>

          <p className="text-3xl font-bold">
            ₹{budget}
          </p>

        </div>

        {/* SPENT CARD */}
        <div className="bg-white shadow-md rounded-2xl p-5">

          <h2 className="text-gray-500 mb-2">
            Total Spent
          </h2>

          <p className="text-3xl font-bold text-red-500">
            ₹{totalSpent}
          </p>

        </div>

        {/* REMAINING CARD */}
        <div className="bg-white shadow-md rounded-2xl p-5">

          <h2 className="text-gray-500 mb-2">
            Remaining
          </h2>

          <p
            className={`text-3xl font-bold ${
              remaining < 0
                ? "text-red-500"
                : "text-green-600"
            }`}
          >
            ₹{remaining}
          </p>

        </div>

      </div>

      {/* PROGRESS BAR SECTION */}
      <div className="bg-white shadow-md rounded-2xl p-6 mb-6">

        <div className="flex justify-between mb-3">

          <h2 className="font-semibold text-lg">
            Budget Usage
          </h2>

          <span className="font-bold">
            {percentage.toFixed(0)}%
          </span>

        </div>

        {/* BACKGROUND BAR */}
        <div className="w-full bg-gray-200 h-5 rounded-full">

          {/* FILLED BAR */}
          <div
            className={`h-5 rounded-full transition-all duration-500 ${
              percentage > 80
                ? "bg-red-500"
                : "bg-green-500"
            }`}
            style={{ width: `${percentage}%` }}
          ></div>

        </div>

      </div>

      {/* STATUS MESSAGE */}
      {remaining < 0 ? (

        <div className="bg-red-100 text-red-700 p-4 rounded-2xl font-medium">
          Budget Exceeded ⚠️
        </div>

      ) : (

        <div className="bg-green-100 text-green-700 p-4 rounded-2xl font-medium">
          You are within budget ✅
        </div>

      )}

    </div>
  );
}