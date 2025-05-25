import AddBtn from "./components/AddBtn";
import Dropdown from "./components/Dropdown";
import List from "./components/List";
import Navbar from "./components/Navbar";
import { Trash2 } from "lucide-react";

function App() {
  const clearAll = () => {
    localStorage.clear();
  };
  return (
    <>
      <Navbar />
      <div>
        <AddBtn />
        <Dropdown />

        <button type="button" onClick={clearAll}>
          <Trash2 />
          Clear All
        </button>
      </div>
      <div>
        <List />
      </div>
    </>
  );
}

export default App;
