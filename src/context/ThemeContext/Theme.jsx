import { ThemeProvider } from "styled-components";
import { themeConfig } from "./themeConfig";
import { useEffect, useState } from "react";
import {
  addThemeDataToLocalStorage,
  getThemeMode,
} from "../../utils/localStorage";

export default function Theme({ children }) {
  const [themeType, setThemeType] = useState("light");
  const [darkMode, setDarkMode] = useState(false);

  const handleChangeTheme = () => {
    setDarkMode((prev) => !prev);
    setThemeType((prev) => (prev === "light" ? "dark" : "light"));
  };

  const theme = {
    ...themeConfig[themeType],
    handleChangeTheme,
    isDark: darkMode,
  };

  useEffect(() => {
    const theme = getThemeMode();

    if (!theme) {
      return addThemeDataToLocalStorage({ mode: darkMode, name: themeType });
    }

    setDarkMode(theme.mode);
    setThemeType(theme.name);
  }, []);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
