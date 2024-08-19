import React, { useContext, useRef, useState } from "react";
import { DataContext } from "../utils/DataContext";

const AmountModal = ({ handleClick }) => {
  const type = useRef(null);
  const amount = useRef(null);
  const title = useRef(null);

  const { handleFormSubmit,setIncome,setExpense,income} = useContext(DataContext);

  const handleSubmit = () => {

    if(title.current.value===""){
      alert("Enter a title");
      return;
    }

    if(amount.current.value===""){
      alert("Enter an amount");
      return;
    }

    if(type.current.value==="income") setIncome(prev=>prev+parseInt(amount.current.value))
    if(type.current.value==="expense") {
      if(amount.current.value>=income) {
        alert("No balance");
        return;
      }
      setExpense(prev=>prev+parseInt(amount.current.value))
    }
    handleFormSubmit({
      [type.current.name]: type.current.value,
      [title.current.name]: title.current.value,
      [amount.current.name]: amount.current.value,
    });

    handleClick();
  };
  return (
    <div className="fixed w-[100vw] top-0 left-0 flex justify-center items-center z-20 h-[100vh] bg-black bg-opacity-60">
      <div className="w-[25%] bg-slate-800 p-4 flex flex-col gap-5">
        <div className="w-full flex justify-end">
          <button
            className="p-2 bg-teal-500 text-white rounded-sm"
            onClick={handleClick}
          >
            Close
          </button>
        </div>

        <div className="flex flex-col gap-4">
          <input
            ref={title}
            className="w-full px-4 py-2 outline-none rounded-sm"
            type="text"
            placeholder="Title"
            name="title"
          />
          <input
            ref={amount}
            className="w-full px-4 py-2 outline-none rounded-sm"
            type="number"
            placeholder="Amount"
            name="amount"
          />
        </div>
        <div className="flex justify-between px-1">
          <select ref={type} className="p-2 outline-none" name="type">
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>

          <button
            onClick={handleSubmit}
            className="px-10 py-2 bg-teal-500 rounded-sm text-white font-medium text-lg"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AmountModal;
