import { useState } from "react";
import { DarkModeContext } from "../contexts/DarkModeContext";

export function DarkModeProvider({ children }: { children: React.ReactNode }) {
  const [darkmode, setDarkmode] = useState(false);
  const toggleDarkmode = () => setDarkmode((prev) => !prev);

  return (
    <DarkModeContext.Provider value={{ darkmode, toggleDarkmode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
