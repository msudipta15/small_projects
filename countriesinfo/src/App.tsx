import { useState } from "react";
import "./App.css";
import Topbar from "./components/topbar";
import { countries } from "./data/countries";
import { IoMoonSharp } from "react-icons/io5";

function App() {
  const [darkmode, setdarkmode] = useState(false);
  return (
    <div
      className={`w-full min-h-screen max-h-full ${
        darkmode ? "bg-[#202d36]" : "bg-[#fafafa]"
      }  `}
    >
      <div
        className={`w-full h-18 ${
          darkmode
            ? "bg-[#2b3743] text-gray-100"
            : "bg-[#ffffff] text-slate-900"
        }  flex justify-between items-center px-10 sm:px-19`}
      >
        <h1 className=" text-xl sm:text-2xl font-semibold">
          Where in the world?
        </h1>
        <button
          onClick={() => setdarkmode(!darkmode)}
          className=" text-sm sm:text-lg font-medium flex items-center gap-2 cursor-pointer"
        >
          <IoMoonSharp size={17} /> <p className="pb-0.5">Dark Mode</p>
        </button>
      </div>
    </div>
  );
}

export default App;
