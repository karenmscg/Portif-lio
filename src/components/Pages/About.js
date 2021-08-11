import { useState } from "react";
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
import { P, HeroContainer, H1, H2 } from "../HeroSection/HeroSection";
import {
  ImgAbout,
  IoJS,
  Html5,
  React,
  Container,
  Graduation,
  Tecnologies,
  GraduationCap,
} from "../HeroSectionAbout/HeroSectionAbout";

import nightGirl from "../../Images/universeGirl.svg";
import myselfPhoto from "../../Images/myself_pictures.jpeg";

const About = () => {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const text = `${
    theme === "light"
      ? `${"I love creating new things and getting into new projects, an exceptional team player, willing to maintain extensive communication, and always give my best."}`
      : "Night theme: I love creating new things and getting into new projects, an exceptional team player, willing to maintain extensive communication, and always give my best."
  }`;

  return (
    <div>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyle />
        <ThemeChanger>
          <HeroContainer>
            <SwitchPosition>
              <SwitchContainer>
                <Input type="checkbox" onChange={() => themeToggler()} />
                <Slider />
              </SwitchContainer>
            </SwitchPosition>
            <H1>About Me</H1>
            <P>{text}</P>
            <Container>
              <Graduation>
                <H2>Graduation</H2>
                <GraduationCap />
                <P>
                  Information Systems 2018-2023 State University of Montes
                  Claros
                </P>
              </Graduation>
              <Tecnologies>
                <H2>Technologies</H2>
                <P>Some technologies that I like to work:</P>
                <React />
                <IoJS />
                <Html5 />
              </Tecnologies>

              <ImgAbout
                src={theme === "light" ? myselfPhoto : nightGirl}
                alt={
                  theme === "light"
                    ? "This Káren Myllena Gonçalves"
                    : "Girl with universe on her hair"
                }
              />
            </Container>
          </HeroContainer>
        </ThemeChanger>
      </ThemeProvider>
    </div>
  );
};

export default About;
