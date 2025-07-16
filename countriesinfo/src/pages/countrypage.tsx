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
        <div className="p-14">
          <h1 className="text-4xl font-bold">France</h1>
          <div className="flex flex-col gap-2 pt-5">
            <span className="flex gap-1">
              <p className="font-medium">Native Name:</p>
              <p className="text-gray-500">Francee</p>
            </span>
            <span className="flex gap-1">
              <p className="font-medium">Population:</p>
              <p className="text-gray-500">Francee</p>
            </span>
            <span className="flex gap-1">
              <p className="font-medium">Region:</p>
              <p className="text-gray-500">Francee</p>
            </span>
            <span className="flex gap-1">
              <p className="font-medium">Sub Region:</p>
              <p className="text-gray-500">Francee</p>
            </span>
            <span className="flex gap-1">
              <p className="font-medium">Capital:</p>
              <p className="text-gray-500">Francee</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
