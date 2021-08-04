import React from "react";
import { P, Img } from "../HeroSection/HeroSection";
import myselImage from '../../Images/myself_pictures.jpeg'


const HeroSectionAbout = () => {
  return (
    <div>
      <h1>About Me</h1>
      <P>
        iN THIS SECTION WRITE SOMETHING RELATED TO YOUR PROFESSIONAL SIDE: I
        love creating new things and getting into new projects. I'm an
        exceptional team player, willing to maintain extensive communication,
        and always give my best.
      </P>
      <h2>Technologies</h2>
      <P>Some technologies that I like to work:</P>
      <Img src= {myselImage} />
    </div>
  );
};

export default HeroSectionAbout;
