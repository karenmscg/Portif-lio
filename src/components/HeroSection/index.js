import React from "react";
import { ThemeChanger } from "../DarkMode/ThemeStyles";
import {
  Button,
  ButtonContainer,
  H1,
  H2,
  HeroContainer,
  Img,
  P,
  H4,
  EmailContainer,
} from "./HeroSection";
import imageWork from "../../Images/work_area.svg";
import discovery from "../../Images/discovery.svg";

const HeroSection = () => {
 

  return (
    <div>
        <ThemeChanger>
          <HeroContainer>
            <H2>Hello, My name is Káren.</H2>
            <H1>Front-end Developer </H1>
            <P>
              I love creating new things and getting into new projects. I'm an
              exceptional team player, willing to maintain extensive
              communication, and always give my best.
            </P>
            <EmailContainer>
              <H4>Email</H4>
              <P>karen.myllena@gmail.com</P>
            </EmailContainer>
            <ButtonContainer>
              <Button>Hire Me</Button>
              <Button primary>Download CV</Button>
            </ButtonContainer>
            <Img 
              src={ThemeChanger === "light" ? imageWork : discovery}
              alt="Woman working with a computer"
            />
          </HeroContainer>
        </ThemeChanger>
    </div>
  );
};

export default HeroSection;
