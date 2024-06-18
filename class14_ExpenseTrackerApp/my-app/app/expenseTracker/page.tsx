"use client"
import React from 'react'
import ExpenseList from '../components/expenseList/expenseList'
import ExpenseModal from '../components/expenseModel/expenseMosel'

const ExpenseTracker = () => {
    const onAddExpense = () => {
      alert("Add expense tracker")
    }
    
    const onClose = () => {
        alert("on close app")
    }

  return (
    <div>
          <h1 className='text-center text-4xl font-black text-red-900 my-6'>Expense tracker app</h1>
          <ExpenseModal isOpen={true} onClose={onClose} onSave={onAddExpense} />
          <ExpenseList expenses={[{
              id: "esh09", amount: 10000,
              category: 'online paid',
              date: '06-june-24',
              note: 'My first transaction'
          }]} />
    </div>
  )
}

export default ExpenseTracker
