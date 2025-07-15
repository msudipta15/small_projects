import { useState } from "react";
import "./App.css";
import { Topbar } from "./components/topbar";
import { Card } from "./components/countrycard";
import { Input } from "./components/ui/input";
import { BsSearch } from "react-icons/bs";
import { countries } from "./data/countries";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";

function App() {
  const [darkmode, setdarkmode] = useState(false);

  const regions = new Set(countries.map((country) => country.region));

  function toggledark() {
    setdarkmode(!darkmode);
  }
  return (
    <div
      className={`w-full min-h-screen max-h-full ${
        darkmode ? "bg-[#202d36]" : "bg-[#fafafa]"
      }  `}
    >
      <Topbar toggledark={toggledark} darkmode={darkmode} />
      <div className="w-full pt-8 mx-20 sm:px-13 ">
        <div className="w-full  sm:flex  sm:justify-between ">
          <div className="w-[350px] sm:w-[450px] relative">
            <BsSearch className="absolute top-1/2 left-4 -translate-y-1/2 " />
            <Input
              type="text"
              name="country"
              placeholder="Enter country name"
              className={`py-6 pl-12 border ${
                darkmode ? "border-gray-700" : "border-gray-300"
              } `}
            />
          </div>
          <div
            className={`pr-40 pt-3 sm:pt-0 ${
              darkmode ? "text-white" : "text-slate-900"
            }`}
          >
            <Select>
              <SelectTrigger className="w-[200px] h-[50px]">
                <SelectValue placeholder="Filter by Region" />
              </SelectTrigger>
              <SelectContent>
                {[...regions].map((r) => (
                  <SelectItem key={r} value={r}>
                    {r}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <div className="mx-20  pt-8 p-4 grid grid-cols-1 gap-4 gap-y-8 sm:grid-cols-4 justify-items-center  ">
        {countries &&
          countries.map((country) => (
            <Card
              key={country.name}
              darkmode={darkmode}
              region={country.region}
              capital={country.capital!}
              population={country.population}
              name={country.name}
              imagelink={country.flag}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
