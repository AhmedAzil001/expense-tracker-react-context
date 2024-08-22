import { useContext, useState } from "react";
import AmountModal from "./AmountModal";
import { DataContext } from "../utils/DataContext";

const Balance = () => {
  const [isOpen, setOpen] = useState(false);

  const {income,expense} = useContext(DataContext);
  console.log(income)
  const handleClick = () => {
    setOpen(!isOpen);
  };
  return (
    <div className="w-[70%] border-[1px] border-slate-300 rounded-sm py-10 px-5 flex justify-between items-center">
      <h1 className="text-3xl font-medium ">
        Balance: $<span className="text-2xl -pt-1">{income-expense}</span>
      </h1>
      <div>
        {isOpen ? (
          <AmountModal handleClick={handleClick} />
        ) : (
          <button
            onClick={handleClick}
            className="px-10 py-2 bg-teal-500 rounded-sm text-white font-medium text-lg"
          >
            Add
          </button>
        )}
      </div>
    </div>
  );
};

export default Balance;
