import React from "react";
import {
  Button,
  ButtonContainer,
  H1,
  H2,
  HeroContainer,
  Img,
  P,
} from "./HeroSection";
import imageWork from "../../Images/work_area.svg";

const HeroSection = () => {
  return (
    <div>
      <HeroContainer>
        <H2>Hello, My name is Káren.</H2>
        <H1>Front-end Developer </H1>
        <P>
          I love creating new things and getting into new projects. I'm an
          exceptional team player, willing to maintain extensive communication,
          and always give my best.
        </P>
        <h4>Email</h4>
        <P>karen.myllena@gmail.com</P>
        <ButtonContainer>
          <Button>Hire Me</Button>
          <Button primary>Download CV</Button>
        </ButtonContainer>
        <Img src={imageWork} />
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
