import React from 'react'

export default function History({ expenses, deleteExpense }) {
  const categoryColors = {
    Food: { bg: 'bg-orange-100', text: 'text-orange-700', dot: 'bg-orange-400' },
    Transport: { bg: 'bg-blue-100', text: 'text-blue-700', dot: 'bg-blue-400' },
    Shopping: { bg: 'bg-pink-100', text: 'text-pink-700', dot: 'bg-pink-400' },
    Health: { bg: 'bg-green-100', text: 'text-green-700', dot: 'bg-green-400' },
    Entertainment: { bg: 'bg-purple-100', text: 'text-purple-700', dot: 'bg-purple-400' },
    Bills: { bg: 'bg-red-100', text: 'text-red-700', dot: 'bg-red-400' },
    Other: { bg: 'bg-gray-100', text: 'text-gray-700', dot: 'bg-gray-400' },
  }

  const getCategoryStyle = (category) =>
    categoryColors[category] || categoryColors['Other']

  const totalAmount = expenses.reduce((sum, exp) => sum + Number(exp.amount), 0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 px-4 py-10 font-sans">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-1">
            Expense Tracker
          </p>
          <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">
            Transaction History
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Review and manage your past expenses
          </p>
        </div>

        {/* Summary Card */}
        {expenses.length > 0 && (
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-5 mb-6 flex items-center justify-between shadow-lg">
            <div>
              <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-1">
                Total Spent
              </p>
              <p className="text-white text-3xl font-extrabold tracking-tight">
                ₹{totalAmount.toLocaleString('en-IN')}
              </p>
            </div>
            <div className="text-right">
              <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-1">
                Transactions
              </p>
              <p className="text-white text-3xl font-extrabold">{expenses.length}</p>
            </div>
          </div>
        )}

        {/* Expense List */}
        {expenses.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-slate-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-3-3v6M3 12a9 9 0 1118 0A9 9 0 013 12z" />
              </svg>
            </div>
            <p className="text-slate-600 font-semibold text-lg">No expenses yet</p>
            <p className="text-slate-400 text-sm mt-1">Your transactions will appear here</p>
          </div>
        ) : (
          <div className="space-y-3">
            {expenses.map((exp, index) => {
              const style = getCategoryStyle(exp.category)
              return (
                <div
                  key={index}
                  className="bg-white border border-slate-100 rounded-2xl px-5 py-4 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow duration-200 group"
                >
                  {/* Left: Category Icon + Info */}
                  <div className="flex items-center gap-4">
                    {/* Icon Circle */}
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${style.bg}`}>
                      <span className={`w-3 h-3 rounded-full ${style.dot}`}></span>
                    </div>

                    {/* Text Info */}
                    <div>
                      <p className="font-semibold text-slate-800 text-sm leading-tight">
                        {exp.title}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${style.bg} ${style.text}`}>
                          {exp.category}
                        </span>
                        {exp.date && (
                          <span className="text-xs text-slate-400">{exp.date}</span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Right: Amount + Delete */}
                  <div className="flex items-center gap-4">
                    <p className="text-slate-800 font-bold text-base">
                      ₹{Number(exp.amount).toLocaleString('en-IN')}
                    </p>
                    <button
                      onClick={() => deleteExpense(index)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-150 w-8 h-8 rounded-lg bg-red-50 hover:bg-red-100 flex items-center justify-center"
                      title="Delete expense"
                    >
                      <svg
                        className="w-4 h-4 text-red-500"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M9 7V4h6v3M3 7h18"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* Footer note */}
        {expenses.length > 0 && (
          <p className="text-center text-xs text-slate-400 mt-8">
            Hover over a transaction to delete it
          </p>
        )}
      </div>
    </div>
  )
}