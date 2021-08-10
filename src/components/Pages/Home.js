import { useState } from "react";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";

import { GlobalStyle } from "../../globalstyles";
import { lightTheme, darkTheme } from "../DarkMode";
import { ThemeChanger } from "../DarkMode/ThemeStyles";
import {
  SwitchContainer,
  Input,
  Slider,
  SwitchPosition,
} from "../Switch/Switch";
import {
  Button,
  ButtonContainer,
  H1,
  H2,
  Img,
  P,
  H4,
  EmailContainer,
  ImgContainer,
} from "../HeroSection/HeroSection";

import imageWork from "../../Images/work_area.svg";
import discovery from "../../Images/discovery.svg";
import vectorDay from "../../Images/VectorDay.svg";
import vectorNight from "../../Images/VectorNight.svg";

const Home = () => {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  //HeroContainerImg is on this section because the property 'light'
  const HeroContainerImg = styled.div`
    padding-left: 5%;
    position: relative;
    background-image: url(${theme === "light" ? vectorDay : vectorNight});
    background-repeat: no-repeat;
    background-position-x: right;
    background-position-y: 100%;
  `;

  const h2 = "Hello, my name is Káren.";
  const h1 = "Front-end Developer ";
  const h4 = "Email";
  const adress = "karen.myllena@gmail.com";
  const text = `${
    theme === "light"
      ? "I love creating new thins and getting into new projects. I consider myself an exceptional team player, willing to maintain extensive communication, and always give my best."
      : "I love meet new people and new cultures. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }`;

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
          <HeroContainerImg>
            <H2>{h2}</H2>
            <H1>{h1}</H1>
            <P>{text}</P>
            <EmailContainer>
              <H4>{h4}</H4>
              <P>{adress}</P>
            </EmailContainer>
            <ButtonContainer>
              <Button>Hire Me</Button>
              <Button
                primary
                href="../../../PDF/Atividade IPV4.pdf"
                target="_blank"
              >
                Download CV
              </Button>
            </ButtonContainer>
            <ImgContainer>
              <Img
                src={theme === "light" ? imageWork : discovery}
                alt={
                  theme === "light"
                    ? "Image of a woman working with computer"
                    : "Image of woman in mountains"
                }
              />
            </ImgContainer>
          </HeroContainerImg>
        </ThemeChanger>
      </ThemeProvider>
    </div>
  );
};

export default Home;
