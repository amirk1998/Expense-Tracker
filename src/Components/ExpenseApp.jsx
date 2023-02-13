import { useEffect, useState } from 'react';
import OverViewComponent from './OverViewComponent';
import TransactionsComponent from './TransactionsComponent';

const ExpenseApp = () => {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (formValues) => {
    setTransactions([
      ...transactions,
      { ...formValues, id: crypto.randomUUID() },
    ]);
  };

  useEffect(() => {
    let exp = 0;
    let inc = 0;
    transactions.forEach((t) => {
      t.type === 'Expense'
        ? (exp = exp + parseFloat(t.amount))
        : (inc = inc + parseFloat(t.amount));
    });

    setExpense(exp);
    setIncome(inc);
  }, [transactions]);

  return (
    <section className='flex flex-col items-center w-[400px] bg-white rounded-xl px-4 pt-2 pb-8 mt-4 '>
      <OverViewComponent
        income={income}
        expense={expense}
        addTransaction={addTransaction}
      />
      <TransactionsComponent transactions={transactions} />
    </section>
  );
};

export default ExpenseApp;
