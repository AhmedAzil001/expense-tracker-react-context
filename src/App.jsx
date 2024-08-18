import Balance from "./components/Balance";
import History from "./components/History";
import { DataProvider } from "./utils/DataContext";

function App() {
  return (
    <DataProvider>
      <div className="flex items-center p-14 flex-col gap-5">
        <Balance />
        <History />
      </div>
    </DataProvider>
  );
}

export default App;
