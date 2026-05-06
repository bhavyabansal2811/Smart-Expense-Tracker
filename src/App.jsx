import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddExpense from "./Pages/AddExpense";
import Charts from "./Pages/Charts";
import History from "./Pages/History";
import MainLayout from "./Layout/MainLayout";

function App() {
  const [expenses, setExpenses] = useState([]);
  //  When app loads → get data → set state
  useEffect(() => {
    const data = localStorage.getItem("expenses");
    if (data) {
      setExpenses(JSON.parse(data));
    }
  }, []);
  function addexpense(expense) {
    console.log("called", expenses);
    const updated = [...expenses, expense];
    setExpenses(updated);
    localStorage.setItem("expenses", JSON.stringify(updated));
  }
//ye index history.jsx se aa rha hai
  function deleteExpense(index){
    const updated=expenses.filter((val,idx)=>(idx!==index))
    setExpenses(updated)
    localStorage.setItem("expenses", JSON.stringify(updated));
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* This is the default page for the parent route. */}
          <Route
            index
            element={<AddExpense expenses={expenses} addexpense={addexpense} />}
          />
          <Route path="history" element={<History expenses={expenses} deleteExpense={deleteExpense}/>} />
          <Route path="charts" element={<Charts expenses={expenses} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
