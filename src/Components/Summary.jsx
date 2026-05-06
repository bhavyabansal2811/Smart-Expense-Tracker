import React from "react";

function Summary({ expenses }) {
  // exp → current expense object summ=0(initial value)
  const total = expenses.reduce((summ, exp) => summ + Number(exp.amount), 0);

  //Grouping our category
  const categoryData = {};
  expenses.forEach((exp) => {
    if (categoryData[exp.category]) {
      categoryData[exp.category] += Number(exp.amount);
    } else {
      categoryData[exp.category] = Number(exp.amount);
    }
  });

  if (expenses.length == 0) {
    return <p className="text-gray-400 mt-7">No expense added yet...</p>;
  }
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Summary</h2>

      {/* total spending */}
      <div className="bg-white shadow-sm rounded-2xl p-5 mb-6 border border-gray-100">
        <p className="text-gray-500 text-sm">Total Spending</p>
        <h3 className="text-3xl font-bold text-gray-900 mt-1">₹ {total}</h3>
      </div>

      {/* .entries()->It converts an object into an array */}
      {/* category,amt] This is array destructuring ex=["Food", 500] */}
      <div className="bg-white shadow-sm rounded-2xl p-5 border border-gray-100">
        <h3 className="text-lg font-medium text-gray-700 mb-3">
          Category Breakdown
        </h3>

        <ul className="space-y-3">
          {Object.entries(categoryData).map(([category, amt]) => (
            <li
              key={category}
              className="flex justify-between items-center bg-gray-50 px-4 py-2 rounded-lg"
            >
              <span className="text-gray-700">{category}</span>
              <span className="font-medium text-gray-900">₹ {amt}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Summary;
