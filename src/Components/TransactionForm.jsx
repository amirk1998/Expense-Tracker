import { useState } from 'react';

const TransactionForm = ({ addTransaction }) => {
  const [formValues, setFormValues] = useState({
    type: 'Expense',
    amount: 0,
    desc: '',
  });

  const changeHandler = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addTransaction(formValues);
  };

  return (
    <form onSubmit={submitHandler} className='w-full'>
      <input
        type='text'
        placeholder='Description'
        name='desc'
        onChange={changeHandler}
        value={formValues.desc}
        className='bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder:text-slate-400 my-2'
      />

      <input
        type='number'
        placeholder='Amount'
        name='amount'
        onChange={changeHandler}
        value={formValues.amount}
        pattern='[0-9]{3}'
        className='bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder:text-slate-400 my-2'
      />

      <div className='mt-2'>
        <input
          type='radio'
          name='type'
          value='Expense'
          id='Expense'
          checked={formValues.type === 'Expense'}
          onChange={changeHandler}
          className='mr-2'
        />
        <label>Expense</label>
        <input
          type='radio'
          name='type'
          value='Income'
          id='Income'
          checked={formValues.type === 'Income'}
          onChange={changeHandler}
          className='mx-2'
        />
        <label>Income</label>
      </div>
      <div className='flex items-center justify-center mb-8 mt-4'>
        <button
          type='submit'
          className='focus:outline-none text-violet-600 border bg-white border-violet-600 hover:text-white hover:bg-violet-600 focus:ring-4 focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5'
        >
          Add Transaction
        </button>
      </div>
    </form>
  );
};

export default TransactionForm;
