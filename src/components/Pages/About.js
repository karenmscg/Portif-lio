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
import { H1, H2 } from "../HeroSection/HeroSection";
import {
  HeroContainerAbout,
  ImgAbout,
  IoJS,
  Html5,
  React,
  Container,
  Graduation,
  Technologies,
  GraduationCap,
  GraduationContent,
  P,
  TechnologiesContent,
  NextJs,
  Css,
  SwitchTitleContainer,
} from "../HeroSectionAbout/HeroSectionAbout";
import nightGirl from "../../Images/universeGirl.svg";
import myselfPhoto from "../../Images/myself_pictures.jpeg";

const About = () => {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const h1 = "About me";
  const p1 = "Information Systems 2018-2023 State University of Montes Claros";
  const text = `${
    theme === "light"
      ? `${"I love creating new things and getting into new projects, an exceptional team player, willing to maintain extensive communication, and always give my best."}`
      : "Night theme: I love creating new things and getting into new projects, an exceptional team player, willing to maintain extensive communication, and always give my best."
  }`;

  return (
    <div>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyle />
        <HeroContainerAbout>
          <ThemeChanger>
            <SwitchTitleContainer>
              <H1>{h1}</H1>
              <SwitchPosition>
                <SwitchContainer>
                  <Input type="checkbox" onChange={() => themeToggler()} />
                  <Slider />
                </SwitchContainer>
              </SwitchPosition>
            </SwitchTitleContainer>
            <P>{text}</P>
            <Container>
              <Graduation>
                <H2>Graduation</H2>
                <GraduationContent>
                  <GraduationCap />
                  <P>{p1}</P>
                </GraduationContent>
              </Graduation>
              <Technologies>
                <H2>Technologies</H2>
                <P>Some technologies that I like to work:</P>
                <TechnologiesContent>
                  <React />
                  <IoJS /> <NextJs />
                  <Html5 /> <Css />
                </TechnologiesContent>
              </Technologies>
              <ImgAbout
                src={theme === "light" ? myselfPhoto : nightGirl}
                alt={
                  theme === "light"
                    ? "This Káren Myllena Gonçalves"
                    : "Girl with universe on her hair"
                }
              />
            </Container>
          </ThemeChanger>
        </HeroContainerAbout>
      </ThemeProvider>
    </div>
  );
};

export default About;
