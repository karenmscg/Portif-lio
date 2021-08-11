import styled from "styled-components";
import { IoLogoHtml5 } from "react-icons/io";
import { FaGraduationCap, FaReact, FaCss3Alt } from "react-icons/fa";
import { SiNextDotJs, SiJavascript } from "react-icons/si";

export const HeroContainerAbout = styled.div`
  padding: 5%;
`;
export const SwitchTitleContainer = styled.div`
display: flex;
align-items: center;
flex-wrap: wrap;
`;

export const ImgAbout = styled.img`
  width: 40vw;
  border-radius: 300px;
  background-color: linear-gradient(to right, red, purple);
  overflow: hidden;
  filter: saturate(0);
  padding: 0px 5% 0px 0px;

  &:hover {
    filter: saturate(1);
    transition: ease 0.3s all;
  }

  @media screen and (max-width: 780px) {
    object-fit: scale-down;
  }
`;

export const P = styled.p`
  width: 80%;
  color: #888888;
  margin-bottom: 5px;
`;

export const IoJS = styled(SiJavascript)`
  background-color: black;
  font-size: 3rem;
  color: yellow;
  margin: 0px 5px 5px 0px;
`;

export const Html5 = styled(IoLogoHtml5)`
  font-size: 3rem;
  color: orange;
  margin: 0px 5px 5px 0px;
`;
export const React = styled(FaReact)`
  font-size: 3rem;
  color: #44c7de;
  margin: 0px 5px 5px 0px;
`;
export const GraduationCap = styled(FaGraduationCap)`
  font-size: 2.5rem;
  color: navy;
  background-color: violet;
  background-size: 10rem;
  border-radius: 100%;
  margin: 0px 5px 5px 0px;
`;

export const Css = styled(FaCss3Alt)`
  color: #2993ee;
  font-size: 3rem;
  margin: 0px 5px 5px 0px;
`;

export const NextJs = styled(SiNextDotJs)`
  font-size: 3rem;
`;

export const Container = styled.div`
  display: flex;
  align-content: center;
  padding: 3% 0px 3% 0px;

  @media screen and (max-width: 980px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;
export const Graduation = styled.div`
  width: 100%;
`;

export const Technologies = styled.div`
  width: 100%;
  border-left: solid 5px #8a599b;
  padding-left: 3%;

  @media screen and (max-width: 970px) {
    border-left: none;
    padding-left: 0;
  }
`;

export const GraduationContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;

export const TechnologiesContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;
