import React from "react";
import { Button, H1 } from "./HeroSection";

const HeroSection = () => {
  return (
    <div>
      <h2>Hello, My name is Marianne.</h2>
      <H1>
        <h1>Front-end Developer</h1>
      </H1>
      <p>
        I love creating new things and getting into new projects. I'm an
        exceptional team player, willing to maintain extensive communication,
        and always give my best.
      </p>
      <h4>Email</h4>
      <p>mariannematos784@gmail.com</p>
      <Button>Hire Me</Button>
      <Button primary>Download CV</Button>
    </div>
  );
};

export default HeroSection;
