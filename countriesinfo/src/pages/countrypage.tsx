import { useParams } from "react-router-dom";
import { countries } from "../data/countries";
import { Topbar } from "../components/topbar";
import { useState } from "react";
import { IoMdArrowBack } from "react-icons/io";

export function CountryPage() {
  const { name } = useParams();
  const country = countries.find((c) => c.name === name);
  const [darkmode, setdarkmode] = useState(false);

  function toggledarkmode() {
    return setdarkmode(!darkmode);
  }

  return (
    <div
      className={`w-full min-h-screen max-h-full ${
        darkmode ? "bg-[#202d36] text-white" : "bg-[#fafafa] text-slate-800"
      }  `}
    >
      <Topbar toggledark={toggledarkmode} darkmode={darkmode} />
      <div className=" mx-27 p-16">
        <button
          className={`border ${
            darkmode ? "border-gray-700" : "border-gray-200"
          } px-16 py-3 rounded-lg shadow cursor-pointer hover:shadow-xl flex items-center justify-center gap-1`}
        >
          <IoMdArrowBack size={26} />
          <span className="text-lg">Back</span>
        </button>
      </div>
      <div className={` h-[500px]  mx-27 px-16 py-8 bg-amber-300 flex gap-25`}>
        <div>
          <img src="https://flagcdn.com/ax.svg" width={600} />
        </div>
        <div>name</div>
      </div>
    </div>
  );
}
