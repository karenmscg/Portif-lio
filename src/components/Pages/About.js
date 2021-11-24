import { useContext } from "react";
import {
  SwitchContainer,
  Input,
  Slider,
  SwitchPosition,
} from "../Switch/Switch";
import { H1, H2, SwitchTitleContainer } from "../HeroSection/HeroSection";
import ThemeContext from "../ThemeContext/ThemeContext";
import {
  HeroContainerAbout,
  ImgAbout,
  IoJS,
  Html5,
  React,
  InformationContainer,
  Graduation,
  Technologies,
  GraduationCap,
  GraduationContent,
  P,
  TechnologiesContent,
  NextJs,
  Css,
} from "../HeroSectionAbout/HeroSectionAbout";
import nightGirl from "../../Images/universeGirl.svg";
import myselfPhoto from "../../Images/myself_pictures.jpeg";

const About = () => {
  const { theme, themeToggler } = useContext(ThemeContext);

  const h1 = "About me";
  const p1 = "Information Systems 2018-2023 State University of Montes Claros";
  const text = `${
    theme === "light"
      ? `${"I love creating new things and getting into new projects, an exceptional team player, willing to maintain extensive communication, and always give my best."}`
      : "Night theme: I love creating new things and getting into new projects, an exceptional team player, willing to maintain extensive communication, and always give my best."
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
        <InformationContainer>
          <Graduation>
            <H2>Graduation</H2>
            <GraduationContent>
              <P>{p1}</P>
              <GraduationCap />
            </GraduationContent>
          </Graduation>
          <Technologies>
            <H2>Technologies</H2>
            <P>Some technologies that I like to work:</P>
            <TechnologiesContent>
              <React />
              <IoJS /> <NextJs />
              <Html5 /> <Css />
            </TechnologiesContent>
          </Technologies>
          <ImgAbout
            src={theme === "light" ? myselfPhoto : nightGirl}
            alt={
              theme === "light"
                ? "This Káren Myllena Gonçalves"
                : "Girl with universe on her hair"
            }
          />
        </InformationContainer>
      </HeroContainerAbout>
    </>
  );
};

export default About;
