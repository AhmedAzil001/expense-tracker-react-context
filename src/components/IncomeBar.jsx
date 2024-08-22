const IncomeBar = ({ data }) => {
  const { amount, title } = data;
  return (
    <div className="flex justify-between px-5 py-4 border-2 items-center">
      <div className="flex gap-28 items-center">
        <h4 className="text-2xl">{title}</h4>
        <span className="text-[0.7rem] pl-2 text-slate-500">
          {new Date().toDateString()}
        </span>
      </div>
      <span>+{amount}</span>
    </div>
  );
};

export default IncomeBar;
