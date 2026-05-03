import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddExpense from "./Pages/AddExpense";
import Charts from "./Pages/Charts";
import History from "./Pages/History";
import MainLayout from "./Layout/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* This is the default page for the parent route. */}
          <Route index element={<AddExpense />} />
          <Route path="history" element={<History />} />
          <Route path="charts" element={<Charts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
