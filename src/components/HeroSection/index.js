import React from "react";
import { Button, H1, HeroContainer, Img, P } from "./HeroSection";
import imageWork from '../../Images/work_area.svg'

const HeroSection = () => {
  return (
    <div>
      <HeroContainer>
      <h2>Hello, My name is Káren.</h2>
      <H1>
        Front-end Developer </H1>
      <P>
        I love creating new things and getting into new projects. I'm an
        exceptional team player, willing to maintain extensive communication,
        and always give my best.
      </P>
      <h4>Email</h4>
      <P>karen.myllena@gmail.com</P>
      <Button>Hire Me</Button>
      <Button primary>Download CV</Button>
      <Img src={imageWork}/>
     </HeroContainer>
      
    </div>
  );
};

export default HeroSection;
