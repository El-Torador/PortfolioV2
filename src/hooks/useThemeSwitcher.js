
import React, { useEffect, useState } from "react";

/**
 * 
 * @returns {["dark" | "light", React.Dispatch<React.SetStateAction<string>>]}
 */
function useThemeSwitcher() {
  const preferDarkQuery = "(prefers-color-scheme: dark)";
  const [mode, setMode] = useState("")

  useEffect(() => {
    const mediaQuery = matchMedia(preferDarkQuery);
    const userPref = localStorage.getItem("theme");

    const handleChange = () => {
      if (userPref) {
        const checkMode = userPref === "dark" ? "light" : "dark";
        setMode(checkMode);
        if (checkMode === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      } else {
        const checkMode = mediaQuery.matches ? "dark" : "light";
        setMode(checkMode);
        if (checkMode === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    }

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    switch (mode) {
      case "dark":
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", mode);
        break;
      case "light":
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", mode);
        break;
      default:
        break;
    }
  }, [mode]);

  return [mode, setMode];
}

export default useThemeSwitcher;
