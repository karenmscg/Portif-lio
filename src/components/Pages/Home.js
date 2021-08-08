import { useState } from "react";
import HeroSection from "../HeroSection";
import { GlobalStyle } from "../../globalstyles";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../DarkMode";
import { ThemeChanger } from "../DarkMode/ThemeStyles";
import {
  SwitchContainer,
  Input,
  Slider,
  SwitchPosition,
} from "../Switch/Switch";
import { Img } from "../HeroSection/HeroSection";
import imageWork from "../../Images/work_area.svg";
import discovery from "../../Images/discovery.svg";

const Home = () => {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyle />
        <ThemeChanger>
          <SwitchPosition>
            <SwitchContainer>
              <Input type="checkbox" onChange={() => themeToggler()} />
              <Slider />
            </SwitchContainer>
          </SwitchPosition>
          <HeroSection />
          <Img src={theme === "light" ? imageWork : discovery} />
        </ThemeChanger>
      </ThemeProvider>
    </div>
  );
};

export default Home;
