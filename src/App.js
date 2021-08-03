import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./globalstyles";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/DarkMode";
import { ThemeChanger } from "./components/DarkMode/ThemeStyles";
import { Button } from "./components/HeroSection/HeroSection";
import Home from "./Pages/Home";

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <Router>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <ThemeChanger>
          <GlobalStyle />
          <Button onClick={() => themeToggler()}> My Dark Mode </Button>
          <Home />
        </ThemeChanger>
      </ThemeProvider>
    </Router>
  );
}

export default App;
