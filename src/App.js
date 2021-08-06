import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalStyle } from "./globalstyles";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/DarkMode";
import { ThemeChanger } from "./components/DarkMode/ThemeStyles";
import {SwitchContainer, Input, Slider } from './components/Switch/Switch'
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Works from "./components/Pages/Works";
import Navbar from "./components/Menu";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <Router>
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
    <GlobalStyle />
    <ThemeChanger>
      <Navbar />
      <SwitchContainer>
        <Input type="checkbox" onChange={() => themeToggler()} />
        <Slider />
      </SwitchContainer>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/works" component={Works} />
      </Switch>
      <Footer />
    </ThemeChanger>
  </ThemeProvider>
</Router>
  );
}

export default App;
