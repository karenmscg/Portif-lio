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
import {
  P,
  ImgAbout,
  HeroContainer,
  H1,
  H2,
  ImgContainer,
  IoJS,
  Html5,
  React,
  Container,
  Graduation,
  Tecnologies,
  GraduationCap
} from "../HeroSection/HeroSection";
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
      : "hello my name is Myllena"
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
                Information Systems 2018-2023 State University of Montes Claros
              </P></Graduation><Tecnologies>
              <H2>Technologies</H2>
              <P>Some technologies that I like to work:</P>
              <React />
              <IoJS />
              <Html5 /></Tecnologies>
              <ImgContainer>
                <ImgAbout
                  src={theme === "light" ? myselfPhoto : nightGirl}
                  alt={
                    theme === "light"
                      ? "This Káren Myllena Gonçalves"
                      : "Girl with universe on her hair"
                  }
                />
              </ImgContainer>
            </Container>
          </HeroContainer>
        </ThemeChanger>
      </ThemeProvider>
    </div>
  );
};

export default About;
