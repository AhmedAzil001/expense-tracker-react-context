import Expense from "./Expense";
import Income from "./Income"
const History = () => {
  return (
    <div className="flex gap-5 w-[70%]">
      <Income/>
      <Expense/>
    </div>
  );
}

export default History;
