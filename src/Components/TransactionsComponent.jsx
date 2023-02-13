import { BiSearch } from 'react-icons/bi';

const TransactionsComponent = ({ transactions }) => {
  return (
    <div className='flex flex-col justify-start w-full'>
      <form className='my-4'>
        <label
          htmlFor='search'
          className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'
        >
          Search
        </label>
        <div className='relative'>
          <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
            <BiSearch />
          </div>
          <input
            type='search'
            id='search'
            className='block w-full mt-4 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 '
            placeholder='Search'
            required
          />
          <button
            type='submit'
            className='text-white absolute text-md right-2.5 bottom-4 focus:ring-4 focus:outline-none bg-slate-600  hover:bg-slate-900 font-bold text-lgs rounded-md px-2 py-1'
          >
            <BiSearch />
          </button>
        </div>
      </form>
      {transactions.map((t) => (
        <div
          key={t.id}
          className={
            t.type === 'Expense'
              ? 'text-red-500 text-lg pl-2 py-2 my-1 font-medium border border-gray-200 rounded-md '
              : 'text-green-500 text-lg pl-2 py-2 my-1 font-medium border border-gray-200 rounded-md '
          }
        >
          {t.desc}
        </div>
      ))}
    </div>
  );
};

export default TransactionsComponent;
