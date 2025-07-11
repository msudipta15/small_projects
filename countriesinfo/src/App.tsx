import { useState } from "react";
import "./App.css";
import { Topbar } from "./components/topbar";
import { Card } from "./components/countrycard";
import { Input } from "./components/ui/input";

function App() {
  const [darkmode, setdarkmode] = useState(false);

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
        <div className="w-[450px] border rounded-lg ">
          <Input
            type="text"
            name="country"
            placeholder="Enter country name"
            className="py-6"
          />
        </div>
        <div></div>
      </div>
      <div className="mx-20  pt-8 p-4 grid grid-cols-1 gap-4 gap-y-8 sm:grid-cols-4 justify-items-center  ">
        <Card darkmode={darkmode} />
        <Card darkmode={darkmode} />
        <Card darkmode={darkmode} />
        <Card darkmode={darkmode} />
        <Card darkmode={darkmode} />
        <Card darkmode={darkmode} />
        <Card darkmode={darkmode} />
        <Card darkmode={darkmode} />
        <Card darkmode={darkmode} />
        <Card darkmode={darkmode} />
        <Card darkmode={darkmode} />
        <Card darkmode={darkmode} />
      </div>
    </div>
  );
}

export default App;
