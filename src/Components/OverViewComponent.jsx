import { useState } from 'react';
import TransactionForm from './TransactionForm';

const OverViewComponent = ({ income, expense, addTransaction }) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <div className='flex flex-row items-center justify-between w-full mt-4 mb-8 '>
        <p className='font-bold text-lg'>Balance : {income - expense}</p>
        <button
          onClick={() => setIsShow((prevState) => !prevState)}
          className='bg-slate-600 text-white hover:bg-slate-900 font-bold text-lg rounded-md px-2 py-1'
        >
          {isShow ? 'CANCEL' : 'ADD'}
        </button>
      </div>

      {isShow && <TransactionForm addTransaction={addTransaction} />}

      <div className='flex items-center justify-between w-full text-lg mb-8 select-none'>
        <div className='flex flex-col items-center justify-center border border-slate-400 rounded-lg px-8 py-4 w-1/2 mr-2'>
          <span>Expense</span>
          <span className='text-xl font-semibold text-red-600 '>{expense}</span>
        </div>
        <div className='flex flex-col items-center justify-center border border-slate-400 rounded-lg px-8 py-4 w-1/2 ml-2'>
          <span>Income</span>
          <span className='text-xl font-semibold text-green-600'>{income}</span>
        </div>
      </div>
    </>
  );
};

export default OverViewComponent;
