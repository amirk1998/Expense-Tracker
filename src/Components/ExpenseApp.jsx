import { useState } from 'react';
import OverViewComponent from './OverViewComponent';
import TransactionsComponent from './TransactionsComponent';

const ExpenseApp = () => {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [transactions, setTransactions] = useState([]);

  return (
    <section className='flex flex-col items-center w-[400px] bg-white rounded-xl px-4 pt-2 pb-8 mt-4 '>
      <OverViewComponent income={income} expense={expense} />
      <TransactionsComponent transactions={transactions} />
    </section>
  );
};

export default ExpenseApp;
