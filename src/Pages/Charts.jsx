import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";



function Charts({ expenses = [] }) {
  // CATEGORY DATA
  const categoryData = {};

  expenses.forEach((exp) => {
    if (categoryData[exp.category]) {
      categoryData[exp.category] += Number(exp.amount);
    } else {
      categoryData[exp.category] = Number(exp.amount);
    }
  });

  const categoryArray = Object.keys(categoryData).map((key) => ({
    name: key,
    value: categoryData[key],
  }));

  // MONTHLY DATA
  const monthlyData = {};
  // Converts date into month name:
  expenses.forEach((exp) => {
    const month = new Date(exp.date).toLocaleString("default", {
      month: "short",
    });

    if (monthlyData[month]) {
      monthlyData[month] += Number(exp.amount);
    } else {
      monthlyData[month] = Number(exp.amount);
    }
  });
  //YHA HAMLOG ARRAY BNA RHE HAI KYUKI OBJECTS ME .MAP USE NHI HOOTA HAI
  const monthlyArray = Object.keys(monthlyData).map((key) => ({
    month: key,
    amount: monthlyData[key],
  }));

  const categoryColors = {
  Food: "#FF6384",
  Travel: "#36A2EB",
  Shopping: "#FFCE56",
  Other: "#8E44AD"
};
  return (
    <div style={{ padding: "20px" }}>
      <h2>📊 Expense Charts</h2>

      {/* PIE CHART */}
      {/* DATAKEY VALUE HSI KYUKI VALUE KEY SE HI DIFFERENTIATE KRENGE */}
      <PieChart width={300} height={300}>
        <Pie data={categoryArray} dataKey="value" outerRadius={100}>
          {categoryArray.map((cat, index) => (
            // 👉 Adds different colors to slices
            <Cell key={index} fill={categoryColors[cat.name]} />
          ))}
        </Pie>
        {/* 👉 Shows values on hover */}
        <Tooltip />
      </PieChart>

      {/* BAR CHART */}
      <BarChart width={400} height={300} data={monthlyArray}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="amount" />
      </BarChart>
    </div>
  );
}

export default Charts;

// “I used Recharts, a React-based charting library.
// First, I transformed raw expense data into grouped formats using reduce() — one grouped by category for the pie chart, and another grouped by month for the bar chart.
// Then I passed this processed data into Recharts components like PieChart and BarChart.
// The dataKey property tells the chart which value to visualize, and components like Tooltip improve interactivity.”
