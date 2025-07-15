import { useState } from "react";
import { Topbar } from "../components/topbar";
import { Card } from "../components/countrycard";
import { Input } from "../components/ui/input";
import { BsSearch } from "react-icons/bs";
import { countries } from "../data/countries";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Link } from "react-router-dom";
export function Homepage() {
  const [darkmode, setdarkmode] = useState(false);
  const [filterregion, setfilterregion] = useState("All");
  const [inputregion, setinputregion] = useState("");

  const regions = new Set(countries.map((country) => country.region));

  const filteredcountries = countries.filter((country) => {
    const matchedcountries =
      filterregion === "All" || filterregion === country.region;

    const regexp = new RegExp(inputregion, "i");
    const matchedsearch = regexp.test(country.name);
    return matchedcountries && matchedsearch;
  });

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
      <div className="w-full pt-8 mx-22 sm:mx-18  sm:px-13 ">
        <div className="w-full  sm:flex  sm:justify-between ">
          <div className="w-[320px] sm:w-[450px] relative">
            <BsSearch className="absolute top-1/2 left-4 -translate-y-1/2 " />
            <Input
              onChange={(e) => setinputregion(e.target.value)}
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
            <Select onValueChange={(value) => setfilterregion(value)}>
              <SelectTrigger className="w-[200px] h-[50px]">
                <SelectValue placeholder="Filter by Region" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">Show all</SelectItem>
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
        {filteredcountries &&
          filteredcountries.map((country) => (
            <Link to={`/${country.name}`}>
              <Card
                key={country.name}
                darkmode={darkmode}
                region={country.region}
                capital={country.capital!}
                population={country.population}
                name={country.name}
                imagelink={country.flag}
              />
            </Link>
          ))}
      </div>
    </div>
  );
}
