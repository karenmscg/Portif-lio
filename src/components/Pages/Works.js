import { useContext } from "react";
import {
  SwitchContainer,
  Input,
  Slider,
  SwitchPosition,
} from "../Switch/Switch";
import { H1, P, SwitchTitleContainer } from "../HeroSection/HeroSection";
import { HeroContainerAbout } from "../HeroSectionAbout/HeroSectionAbout";

import ThemeContext from "../ThemeContext/ThemeContext";
import CarouselProject from "../CarouselProjects";

const Works = () => {
  const { theme, themeToggler } = useContext(ThemeContext);
  const h1 = "My Works";
  const text = `${
    theme === "light"
      ? "I love creating new thins and getting into new projects. I consider myself an exceptional team player, willing to maintain extensive communication, and always give my best."
      : "I love meet new people and new cultures. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }`;

  return (
    <>
      <HeroContainerAbout>
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
        <CarouselProject/>
      </HeroContainerAbout>
    </>
  );
};

export default Works;
