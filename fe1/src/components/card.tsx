import Switch from "@mui/material/Switch";
import { useState } from "react";

interface cardprop {
  darkmode: boolean;
  name: string;
  description: string;
  logo: string;
  isActive: boolean;
}

export function Card({
  darkmode,
  logo,
  name,
  description,
  isActive,
}: cardprop) {
  const [active, setactive] = useState(isActive);

  function handleonchange() {
    setactive(!active);
  }
  return (
    <div
      className={`${
        darkmode
          ? "bg-[#1f2535] border-gray-600"
          : "bg-[#fcfdff] border-gray-300"
      } w-full flex flex-col justify-between   sm:w-[400px] h-[170px] rounded-2xl p-4 border `}
    >
      <div className="flex items-start gap-1 ">
        <div className="min-w-[80px]">
          <img src={logo} />
        </div>
        <div className="max-w-fit">
          <h1
            className={`text-xl ${
              darkmode ? "text-white" : "text-gray-800"
            }  font-semibold mb-1`}
          >
            {name}
          </h1>
          <p className={`${darkmode ? "text-gray-400" : "text-slate-500"}`}>
            {description}
          </p>
        </div>
      </div>
      <div className="flex justify-between">
        <button
          className={`px-4 py-1.5 rounded-2xl border ${
            darkmode
              ? "border-gray-600 text-gray-200  hover:border-double hover:border-red-400 hover:bg-slate-600"
              : "border-gray-600 text-gray-800  hover:border-double hover:border-red-400 hover:bg-red-500 hover:text-white"
          }  cursor-pointer`}
        >
          Remove
        </button>
        <button>
          <Switch color="error" checked={active} onChange={handleonchange} />
        </button>
      </div>
    </div>
  );
}
