import { Link, useParams } from "react-router-dom";
import { countries } from "../data/countries";
import { Topbar } from "../components/topbar";
import { useState } from "react";
import { IoMdArrowBack } from "react-icons/io";

export function CountryPage() {
  const { name } = useParams();
  const country = countries.find((c) => c.name === name);
  const [darkmode, setdarkmode] = useState(false);

  const currency = country?.currencies?.[0]?.name;
  const languages = country?.languages.map((l) => l.name);
  const borders = countries.filter((c) =>
    country?.borders?.includes(c.alpha3Code)
  );

  console.log(borders);

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
      <div className=" mx-8 sm:mx-27 p-10 py-6 sm:py-18">
        <Link to={"/"}>
          <button
            className={`border ${
              darkmode ? "border-gray-700" : "border-gray-200"
            } px-16 py-3 rounded-lg shadow cursor-pointer hover:shadow-xl flex items-center justify-center gap-1`}
          >
            <IoMdArrowBack size={26} />
            <span className="text-lg">Back</span>
          </button>
        </Link>
      </div>
      <div
        className={` h-full sm:h-[500px]  sm:mx-27 mx-8 p-12 sm:px-10 sm:py-6  sm:flex gap-25`}
      >
        <div>
          <img src={country?.flag} width={600} />
        </div>
        <div className="sm:p-10 py-10">
          <h1 className="text-4xl font-bold">{country?.name}</h1>
          <div className="sm:flex sm:gap-32">
            <div className="flex flex-col gap-2 pt-5">
              <span className="flex gap-1">
                <p className="font-medium">Native Name : </p>
                <p className="text-gray-500">{country?.nativeName}</p>
              </span>
              <span className="flex gap-1">
                <p className="font-medium">Population :</p>
                <p className="text-gray-500">{country?.population}</p>
              </span>
              <span className="flex gap-1">
                <p className="font-medium">Region :</p>
                <p className="text-gray-500">{country?.region}</p>
              </span>
              <span className="flex gap-1">
                <p className="font-medium">Sub Region :</p>
                <p className="text-gray-500">{country?.subregion}</p>
              </span>
              <span className="flex gap-1">
                <p className="font-medium">Capital :</p>
                <p className="text-gray-500">{country?.capital}</p>
              </span>
            </div>
            <div className="flex flex-col gap-2 pt-10 sm:pt-5">
              <span className="flex gap-1">
                <p className="font-medium">Top Level Domain : </p>
                <p className="text-gray-500">{country?.topLevelDomain}</p>
              </span>
              <span className="flex gap-1">
                <p className="font-medium">Currencies: </p>
                <p className="text-gray-500">{currency}</p>
              </span>
              <span className="flex gap-1">
                <p className="font-medium">Languages: </p>
                <p className="text-gray-500">{languages?.join(", ")}</p>
              </span>
            </div>
          </div>
          <div className="sm:pt-16 pt-10 sm:flex sm:gap-2 ">
            <span className="font-medium">Border Countries : </span>
            <div className=" flex flex-wrap gap-1 h-full sm:w-[500px] pt-6 sm:pt-0  ">
              {borders.map((b) => (
                <button
                  className={`border ${
                    darkmode ? "border-gray-700" : "border-gray-200"
                  } w-fit px-3 py-1 text-gray-500 rounded`}
                >
                  {b.name.trim()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
