import { createContext, useState } from "react"

export const ColorModeContext = createContext({
  mode: " ",
  setMode: () => { alert("Me configure!") },
  toggleMode: () => { alert("Me configure!") }
});

export default function ColorModeProvider(props) {
  const [mode, setMode] = useState(props.initialMode);

  function toggleMode() {
    if (mode === "dark") setMode("light");
    if (mode === "light") setMode("dark"); 
  }

  return (
    <ColorModeContext.Provider value={{ mode: mode, setMode: setMode, toggleMode: toggleMode }}>
      {props.children}
    </ColorModeContext.Provider>
  )
}