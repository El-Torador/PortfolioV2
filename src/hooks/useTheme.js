
import { ThemeContext } from "@/context/theme-context";
import React, { useContext } from "react";

/**
 * 
 * @returns {["dark" | "light", React.Dispatch<React.SetStateAction<string>>]}
 */
function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}

export default useTheme;
