import React from 'react'
import { Outlet } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';

export default function MainLayout() {
  return (
    <div className='flex'>
      <Sidebar/>

      <div className='p-2 w-full'>
        <Outlet/>
      </div>
    </div>
  )
}
// Store data in AddExpense page
// Pass function → to ExpenseForm