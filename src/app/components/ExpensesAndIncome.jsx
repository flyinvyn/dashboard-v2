import React from 'react'

const ExpensesAndIncome = () => {
    return (
        <div className='border border-gray-300 rounded-xl p-3'>
            <p className='font-semibold'>Expenses And Income</p>
            <div className='flex items-center justify-between font-medium text-sm mt-5'>
                <p>Expenses</p>
                <p>|</p>
                <p>Income</p>
            </div>
            <div className='flex items-center justify-between font-medium'>
                <p>75%</p>
                <p className='ml-5'>VS</p>
                <p>40%</p>
            </div>
            <div className='flex items-center justify-between'>
                <p className='text-slate-300 text-xs'>5.653</p>
                <p className='ml-4 text-sm font-medium'>|</p>
                <p className='text-slate-300 text-xs'>2.656</p>
            </div>
        </div>
    )
}

export default ExpensesAndIncome