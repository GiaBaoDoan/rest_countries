import "./App.css";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "./components";
import { ThemeContext } from "./store/Context";
import { useState } from "react";
function App() {
  const [mode, setMode] = useState<boolean>(false);
  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      <div
        className={`min-h-screen pb-2   ${
          !mode ? " bg-modeBlackTheme" : "bg-lightWhite"
        } `}
      >
        <Header />
        <Outlet />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
