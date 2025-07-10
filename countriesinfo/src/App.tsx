import { useState } from "react";
import "./App.css";
import { Topbar } from "./components/topbar";

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
    </div>
  );
}

export default App;
