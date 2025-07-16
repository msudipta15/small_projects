import { createContext } from "react";

export const DarkModeContext = createContext<{
  darkmode: boolean;
  toggleDarkmode: () => void;
}>({
  darkmode: false,
  toggleDarkmode: () => {},
});
