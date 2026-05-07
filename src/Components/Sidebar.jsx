import React from 'react'
import { NavLink } from 'react-router-dom';
// You get this powerful feature: isActive
// NavLink → moves + tells if active
export default function Sidebar() {
  return (
    <div className='w-56 h-screen bg-slate-800 text-white flex flex-col p-5 gap-6'>
        <h2 className='text-xl font-bolder'>Expense Tracker</h2>

        <NavLink to="/" className={({isActive})=> isActive ? 'bg-slate-600 p-2 rounded' :'p-2'}>Add Expense</NavLink>
        <NavLink to="history" className={({isActive})=> isActive ? 'bg-slate-600 p-2 rounded' :'p-2'}> 📋 History</NavLink>
        <NavLink to="charts" className={({isActive})=> isActive ? 'bg-slate-600 p-2 rounded' :'p-2'}> 📊 Charts</NavLink>
        <NavLink to="budget" className={({isActive})=> isActive ? 'bg-slate-600 p-2 rounded' :'p-2'}>💰 Budget</NavLink>
    </div>
  )
}
