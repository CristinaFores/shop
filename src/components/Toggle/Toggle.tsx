import { ThemeContext } from "@/contexts/ThemeContext/ThemeContext";
import { useContext, useEffect } from "react";

const Toggle = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);
  return (
    <div className="switch-container">
      <label className="switch">
        <input onClick={toggleDarkMode} type="checkbox" />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default Toggle;
