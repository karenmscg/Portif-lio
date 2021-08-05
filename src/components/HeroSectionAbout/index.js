import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { P, Img } from "../HeroSection/HeroSection";
import myselImage from "../../Images/myself_pictures.jpeg";
import reactLogo from "../../Images/react.svg";
import jsLogo from "../../Images/javascript.svg";
import htmlLogo from "../../Images/html5.svg";

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
      <FaGraduationCap />
      <P>Information Systems 2018-2023 State University of Montes Claros</P>
      <h2>Technologies</h2>
      <P>Some technologies that I like to work:</P>
      <img src={reactLogo} />
      <img src={jsLogo} />
      <img src={htmlLogo} />
      <Img src={myselImage} />
    </div>
  );
};

export default HeroSectionAbout;
