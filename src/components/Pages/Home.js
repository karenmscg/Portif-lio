import { useContext } from "react";
import styled from "styled-components";
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
  P,
  H4,
  EmailContainer,
  ImgContainer,
  SwitchTitleContainer,
} from "../HeroSection/HeroSection";

import { HeroContainerAbout } from "../HeroSectionAbout/HeroSectionAbout";

import imageWork from "../../Images/work_area.svg";
import discovery from "../../Images/discovery.svg";
import vectorDay from "../../Images/VectorDay.svg";
import vectorNight from "../../Images/VectorNight.svg";
import ThemeContext from "../ThemeContext/ThemeContext";

const Home = () => {
  const { theme, themeToggler } = useContext(ThemeContext);

  //HeroContainerImg is on this section because the property 'light'
  const HeroContainerImg = styled.div`
    background-image: url(${theme === "light" ? vectorDay : vectorNight});
    background-repeat: no-repeat;
    background-position-x: right;
    background-position-y: 100%;
    background-size: contain;
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
    <>
      <HeroContainerAbout>
        <H2>{h2}</H2>
        <SwitchTitleContainer>
          <H1>{h1}</H1>
          <SwitchPosition>
            <SwitchContainer>
              <Input type="checkbox" onChange={() => themeToggler()} />
              <Slider />
            </SwitchContainer>
          </SwitchPosition>
        </SwitchTitleContainer>
        <HeroContainerImg>
          <P>{text}</P>
          <EmailContainer>
            <H4>{h4}</H4>
            <P>{adress}</P>
          </EmailContainer>
          <ButtonContainer>
            <Button href="mailto:karen.myllena@gmail.com">Hire Me</Button>
            <Button
              primary
              href="../../../PDF/Atividade IPV4.pdf"
              target="_blank"
            >
              Download CV
            </Button>
          </ButtonContainer>
          <ImgContainer>
            <img
              src={theme === "light" ? imageWork : discovery}
              alt={
                theme === "light"
                  ? "Image of a woman working with computer"
                  : "Image of woman in mountains"
              }
            />
          </ImgContainer>
        </HeroContainerImg>
      </HeroContainerAbout>
    </>
  );
};

export default Home;
