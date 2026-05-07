import React from 'react'
import { Outlet } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';

export default function MainLayout() {
  return (
    //max-height screen se page me pura screen jitna hi height hoga
    <div className='flex max-h-screen'>
      <Sidebar/>
    {/* baki jo bhi screen height ke agge ja rha hai wo overflow hoga */}
      <div className='p-2 w-full overflow-scroll'>

        <Outlet/>
      </div>
    </div>
  )
}
// Store data in AddExpense page
// Pass function → to ExpenseForm