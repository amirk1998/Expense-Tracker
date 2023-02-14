import { useState } from 'react';
import ExpenseApp from './Components/ExpenseApp';

function App() {
  return (
    <div className='App bg-neutral-100 text-slate-900 flex flex-col items-center h-[100vh] w-full pt-8 font-[Montserrat] '>
      <header>
        <h2 className='text-3xl text-center font-bold mb-4'>Expense Tracker</h2>
      </header>
      <ExpenseApp />
    </div>
  );
}

export default App;

//TODO : E last  => 14min
