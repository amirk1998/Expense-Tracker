import { useState } from 'react';
import TransactionForm from './TransactionForm';

const OverViewComponent = ({ income, expense, addTransaction }) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <div className='flex flex-row items-center justify-between w-full mt-4 mb-8 '>
        <p className='font-bold text-lg'>Balance : {income - expense} $</p>
        <button
          onClick={() => setIsShow((prevState) => !prevState)}
          className={
            !isShow
              ? 'focus:outline-none text-violet-600 border bg-white border-violet-600 hover:text-white hover:bg-violet-600 focus:ring-4 focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5'
              : 'focus:outline-none text-red-600 border bg-white border-red-600 hover:text-white hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5'
          }
          // className='focus:outline-none text-violet-600 border bg-white border-violet-600 hover:text-white hover:bg-violet-600 focus:ring-4 focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5'
          // className='bg-slate-600 text-white hover:bg-slate-900 font-bold text-lg rounded-md px-2 py-1'
        >
          {isShow ? 'CANCEL' : 'ADD'}
        </button>
      </div>

      {isShow && (
        <TransactionForm
          addTransaction={addTransaction}
          setIsShow={setIsShow}
        />
      )}

      <div className='flex items-center justify-between w-full text-lg mb-8 select-none'>
        <div className='flex flex-col items-center justify-center border border-slate-400 rounded-lg px-8 py-4 w-1/2 mr-2 gap-y-2'>
          <span>Expense</span>
          <span className='text-xl font-semibold text-red-600 '>
            {expense} $
          </span>
        </div>
        <div className='flex flex-col items-center justify-center border border-slate-400 rounded-lg px-8 py-4 w-1/2 ml-2 gap-y-2'>
          <span>Income</span>
          <span className='text-xl font-semibold text-green-600'>
            {income} $
          </span>
        </div>
      </div>
    </>
  );
};

export default OverViewComponent;
