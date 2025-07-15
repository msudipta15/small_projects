import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Homepage } from "./pages/homepage";
import { CountryPage } from "./pages/countrypage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:name" element={<CountryPage />} />
        <Route path="*" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
