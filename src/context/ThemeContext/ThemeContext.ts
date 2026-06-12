import { createContext, useContext } from "react";

export type Theme = "light" | "dark";

export interface ThemeContextValues {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextValues>({
  theme: "light",
  setTheme: () => {},
  toggleTheme: () => {},
});

export const useThemeContext = () => {
  return useContext(ThemeContext);
};
