import React, { createContext, useState, useContext } from 'react';

// Create a context for the mode
const ModeContext = createContext();

// Custom hook to access the mode context
export const useMode = () => {
  return useContext(ModeContext);
};

// ModeProvider component to provide mode value to the app
export const ModeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    setMode(prevMode => {
      const newMode = prevMode === "light" ? "dark" : "light";
      document.body.style.backgroundColor = newMode === "light" ? "#FFFFFF" : "#000000";
      return newMode;
    });
  };

  return (
    <ModeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
};
