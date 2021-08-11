import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { GlobalStyle } from "./globalstyles";
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/DarkMode";
import { ThemeChanger } from "./components/DarkMode/ThemeStyles";

import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Works from "./components/Pages/Works";
import Navbar from "./components/Menu";
import Footer from "./components/Footer";

import ThemeContext from "./ThemeContext";

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <Router>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <ThemeContext.Provider value={{ theme, themeToggler }}>
          <GlobalStyle />
          <ThemeChanger>
            <Navbar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" exact component={About} />
              <Route path="/works" component={Works} />
            </Switch>
            <Footer />
          </ThemeChanger>
        </ThemeContext.Provider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
