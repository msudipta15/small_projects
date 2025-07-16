import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Homepage } from "./pages/homepage";
import { CountryPage } from "./pages/countrypage";
import { DarkModeProvider } from "./providers/darkmodeproviders";

function App() {
  return (
    <DarkModeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/:name" element={<CountryPage />} />
          <Route path="*" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;
