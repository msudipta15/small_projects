import { useState } from "react";
import "./App.css";
import { Topbar } from "./components/topbar";
import { Card } from "./components/countrycard";

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
      <div className="px-20 pt-8">
        <Card darkmode={darkmode} />
      </div>
    </div>
  );
}

export default App;
