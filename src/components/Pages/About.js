import { useContext } from "react";
import {
  SwitchContainer,
  Input,
  Slider,
  SwitchPosition,
} from "../Switch/Switch";
import {
  P,
  ImgAbout,
  HeroContainer,
  H1,
  H2,
  ImgContainer,
  IoJS,
  Html5,
  React,
  Container,
  Graduation,
  Tecnologies,
  GraduationCap,
} from "../HeroSection/HeroSection";
import nightGirl from "../../Images/universeGirl.svg";
import myselfPhoto from "../../Images/myself_pictures.jpeg";

import ThemeContext from "../../ThemeContext";

const About = () => {
  const { theme, themeToggler } = useContext(ThemeContext);

  const text = `${
    theme === "light"
      ? `${"I love creating new things and getting into new projects, an exceptional team player, willing to maintain extensive communication, and always give my best."}`
      : "hello my name is Myllena"
  }`;

  return (
    <>
      <HeroContainer>
        <SwitchPosition>
          <SwitchContainer>
            <Input type="checkbox" onChange={() => themeToggler()} />
            <Slider />
          </SwitchContainer>
        </SwitchPosition>
        <H1>About Me</H1>
        <P>{text}</P>
        <Container>
          <Graduation>
            <H2>Graduation</H2>
            <GraduationCap />
            <P>
              Information Systems 2018-2023 State University of Montes Claros
            </P>
          </Graduation>
          <Tecnologies>
            <H2>Technologies</H2>
            <P>Some technologies that I like to work:</P>
            <React />
            <IoJS />
            <Html5 />
          </Tecnologies>
          <ImgContainer>
            <ImgAbout
              src={theme === "light" ? myselfPhoto : nightGirl}
              alt={
                theme === "light"
                  ? "This Káren Myllena Gonçalves"
                  : "Girl with universe on her hair"
              }
            />
          </ImgContainer>
        </Container>
      </HeroContainer>
    </>
  );
};

export default About;
