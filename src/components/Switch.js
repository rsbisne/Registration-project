import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ReactSwitch from "react-switch";
import "../index.css";
const Switch = () => {
  const [theme, setTheme] = useState("light-theme");
  const toggleTheme = () => {
    theme === "dark-theme" ? setTheme("light-theme") : setTheme("dark-theme");
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div className="switch">
      <ReactSwitch onChange={toggleTheme} checked={theme === "dark-theme"} />
    </div>
  );
};

export default Switch;
