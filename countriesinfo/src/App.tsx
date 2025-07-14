import { useState } from "react";
import "./App.css";
import { Topbar } from "./components/topbar";
import { Card } from "./components/countrycard";
import { Input } from "./components/ui/input";
import { BsSearch } from "react-icons/bs";
import { countries } from "./data/countries";

function App() {
  const [darkmode, setdarkmode] = useState(false);
  const [countrylist, setcountrylist] = useState(countries);

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
      <div className="w-full pt-8 mx-20 px-13 ">
        <div className="w-[450px] ">
          <div className="w-full relative">
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
        </div>
        <div></div>
      </div>
      <div className="mx-20  pt-8 p-4 grid grid-cols-1 gap-4 gap-y-8 sm:grid-cols-4 justify-items-center  ">
        {countrylist &&
          countrylist.map((country) => (
            <Card
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
