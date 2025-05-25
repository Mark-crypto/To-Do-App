import AddBtn from "./components/AddBtn";
import Dropdown from "./components/Dropdown";
import List from "./components/List";
import Navbar from "./components/Navbar";
import { Trash2 } from "lucide-react";
import { useState } from "react";

function App() {
  const [filter, setFilter] = useState<"all" | "complete" | "incomplete">(
    "all"
  );

  const clearAll = () => {
    localStorage.clear();
    location.reload();
  };

  return (
    <>
      <Navbar />
      <div className="p-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex gap-4">
          <AddBtn />
          <Dropdown setFilter={setFilter} />
        </div>
        <button
          type="button"
          onClick={clearAll}
          className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
        >
          <Trash2 size={18} /> Clear All
        </button>
      </div>
      <div className="p-4">
        <List filter={filter} />
      </div>
    </>
  );
}

export default App;
