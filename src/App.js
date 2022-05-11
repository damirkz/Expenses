import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
const DUMMY_EXPENSES = [
  {
    id: 1,
    title: "Valor",
    amount: 24.67,
    date: new Date(2022, 2, 20),
  },
  {
    id: 2,
    title: "Cripple",
    amount: 94.67,
    date: new Date(2021, 7, 20),
  },
  {
    id: 5,
    title: "Misery",
    amount: 24594.67,
    date: new Date(2020, 6, 12),
  },
  {
    id: 4,
    title: "Honour",
    amount: 2.67,
    date: new Date(2020, 5, 8),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  console.log(DUMMY_EXPENSES, "FROM APP JS");

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
