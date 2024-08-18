import { useContext } from "react";
import IncomeBar from "./IncomeBar";
import { DataContext } from "../utils/DataContext";

const Income = () => {
  const { allTransaction } = useContext(DataContext);

  
  return (
    <div className="w-[50%] rounded-sm border-2 h-[60vh]">
      <div className="rounded-sm border-b-2 p-4">
        <h1 className="text-xl text-center">Income</h1>
      </div>
      <div className="p-3">
        {
          allTransaction.map((data,index)=> data.type==="income" &&  <IncomeBar key={index} data={data}/>)
        }
      </div>
    </div>
  );
};

export default Income;
