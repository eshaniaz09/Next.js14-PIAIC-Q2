import { ExpenseListType } from '@/types/ExpenseListType'
import React from 'react'

const ExpenseList = ({expenses}:{expenses:ExpenseListType[]}) => {
  return (
    <div className="container mx-auto p-4">
    <h2 className="text-2xl font-bold mb-4">Expense List</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">ID</th>
            <th className="py-3 px-6 text-left">Amount</th>
            <th className="py-3 px-6 text-left">Category</th>
            <th className="py-3 px-6 text-left">Date</th>
            <th className="py-3 px-6 text-left">Note</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {expenses.map((expense) => (
            <tr key={expense.id} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left">{expense.id}</td>
              <td className="py-3 px-6 text-left">{expense.amount}</td>
              <td className="py-3 px-6 text-left">{expense.category}</td>
              <td className="py-3 px-6 text-left">{expense.date}</td>
              <td className="py-3 px-6 text-left">{expense.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default ExpenseList
