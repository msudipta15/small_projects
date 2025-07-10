import "./App.css";
import Topbar from "./components/topbar";
import { countries } from "./data/countries";
import { IoMoonSharp } from "react-icons/io5";

function App() {
  return (
    <div className={`w-full min-h-screen max-h-full bg-[#202d36]`}>
      <div
        className={`w-full h-18 bg-[#2b3743] flex justify-between items-center px-10 sm:px-19`}
      >
        <h1 className="text-gray-100 text-xl sm:text-2xl font-semibold">
          Where in the world?
        </h1>
        <button className="text-gray-100 text-sm sm:text-lg font-medium flex items-center gap-2 cursor-pointer">
          <IoMoonSharp size={17} /> <p className="pb-0.5">Dark Mode</p>
        </button>
      </div>
    </div>
  );
}

export default App;
