import { createContext } from "react";

export const ThemeContext = createContext<{
  mode: boolean;
  setMode: (item: boolean) => void;
} | null>(null);
