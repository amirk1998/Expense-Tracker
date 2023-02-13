const TransactionForm = () => {
  return (
    <form>
      <input type='number' placeholder='Amount' />
      <input type='text' placeholder='Description' />
      <div className='mt-2'>
        <input
          type='radio'
          name='type'
          value='Expense'
          id='Expense'
          className='mr-2'
        />
        <label>Expense</label>
        <input
          type='radio'
          name='type'
          value='Income'
          id='Income'
          className='mx-2'
        />
        <label>Income</label>
      </div>
      <div className='flex items-center justify-center mb-8 mt-4'>
        <button className='bg-slate-600 text-white hover:bg-slate-900 font-bold text-lg rounded-md px-2 py-1'>
          Add Transaction
        </button>
      </div>
    </form>
  );
};

export default TransactionForm;
