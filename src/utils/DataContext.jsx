import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [allTransaction, setAllTransaction] = useState([]);

  const handleFormSubmit = (data) => {
    setAllTransaction([...allTransaction, data]);
  };

  return (
    <DataContext.Provider
      value={{
        handleFormSubmit,
        allTransaction,
        income, setIncome,
        expense, setExpense
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
