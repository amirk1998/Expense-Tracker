import { useEffect, useState } from 'react';
import { BiSearch } from 'react-icons/bi';

const TransactionsComponent = ({ transactions }) => {
  const [searchItem, setSearchItem] = useState('');
  const [filteredTnx, setFilteredTnx] = useState(transactions);

  const filteredTransactions = (search) => {
    if (!search || search === '') {
      setFilteredTnx(transactions);
      return;
    }
    const filtered = transactions.filter((t) =>
      t.desc.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredTnx(filtered);
  };

  const changeHandler = (e) => {
    setSearchItem(e.target.value);
    filteredTransactions(e.target.value);
  };

  useEffect(() => {
    filteredTransactions(searchItem);
  }, [transactions]);

  if (!transactions.length)
    return (
      <p className='text-lg text-orange-500 px-2 py-2 my-1 font-semibold  w-full text-center'>
        Add some Transaction !!!
      </p>
    );

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
            onChange={changeHandler}
            value={searchItem}
            placeholder='Search'
            className='block w-full mt-4 p-4 pl-10 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-1 focus:ring-violet-500 focus:border-violet-500 '
            required
          />
          {/* <button
            type='submit'
            className='focus:outline-none absolute right-2.5 bottom-3 text-violet-600 border bg-white border-violet-600 hover:text-white hover:bg-violet-600 focus:ring-4 focus:ring-violet-300 font-medium rounded-lg text-sm px-2 py-2'
            // className='text-white absolute text-md right-2.5 bottom-4 focus:ring-4 focus:outline-none bg-slate-600  hover:bg-slate-900 font-bold text-lgs rounded-md px-2 py-1'
          >
            <BiSearch />
          </button> */}
        </div>
      </form>
      {filteredTnx.length ? (
        filteredTnx.map((t) => (
          <div
            key={t.id}
            className={
              t.type === 'Expense'
                ? 'text-red-500 text-lg bg-gray-50 px-2 py-2 my-1 font-semibold border border-r-4 border-r-red-500 border-gray-300 rounded-md flex items-center justify-between w-full '
                : 'text-green-500 text-lg bg-gray-50 px-2 py-2 my-1 font-semibold border border-r-4 border-r-green-500  border-gray-300 rounded-md flex items-center justify-between w-full'
            }
          >
            <span>{t.desc}</span>
            <span>{parseFloat(t.amount)} $</span>
          </div>
        ))
      ) : (
        <span className='text-lg text-slate-600 px-2 py-2 my-1 font-semibold  w-full text-center'>
          No item matches
        </span>
      )}
    </div>
  );
};

export default TransactionsComponent;
