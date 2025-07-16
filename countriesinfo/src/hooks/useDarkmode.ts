import { useContext } from "react";
import { DarkModeContext } from "../contexts/DarkModeContext";

export function useDarkmode() {
  return useContext(DarkModeContext);
}
