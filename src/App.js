import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Menu";
import { GlobalStyle } from "./globalstyles";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/DarkMode";
import { ThemeChanger } from "./components/DarkMode/ThemeStyles";

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
          <Navbar />
          <button onClick={() => themeToggler()}> Change Theme </button>
          <HeroSection />
          <Footer />
        </ThemeChanger>
      </ThemeProvider>
    </Router>
  );
}

export default App;
