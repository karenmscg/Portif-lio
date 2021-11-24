import styled from "styled-components";
import { IoLogoHtml5 } from "react-icons/io";
import { FaGraduationCap, FaReact, FaCss3Alt } from "react-icons/fa";
import { SiNextDotJs, SiJavascript } from "react-icons/si";

export const HeroContainerAbout = styled.div`
  padding: 10% 0% 0% 5%;
  height: max-content;

  @media screen and (max-width: 420px) {
    padding-top: 25%;
  }

  @media screen and (min-width: 1200px) {
    padding-top: 8%;
  }
`;

export const ImgAbout = styled.img`
  border-radius: 300px;
  overflow: hidden;
  filter: saturate(0);
  padding: 0px 5% 0px 0px;
  width: 35em;

  &:hover {
    filter: saturate(1);
    transition: ease 0.3s all;
  }

  @media screen and (max-width: 1200px) {
    width: 50%;
    padding: 0;
  }
`;

export const P = styled.p`
  width: 80%;
  color: #888888;
  margin-bottom: 5px;

  @media screen and (min-width: 1400px) {
    font-size: 26px;
    width: 70%;
  }

  @media screen and (max-width: 780px) {
    width: 100%;
    padding-right: 5%
    ;
  }
`;

export const IoJS = styled(SiJavascript)`
  background-color: black;
  font-size: 2.7rem;
  color: yellow;
  margin: 0px 5px 5px 0px;
`;

export const Html5 = styled(IoLogoHtml5)`
  font-size: 2.7rem;
  color: orange;
  margin: 0px 5px 5px 0px;
`;
export const React = styled(FaReact)`
  font-size: 2.7rem;
  color: #44c7de;
  margin: 0px 5px 5px 0px;
`;
export const GraduationCap = styled(FaGraduationCap)`
  font-size: 2.5rem;
  color: navy;
  background-color: violet;
  background-size: 10rem;
  border-radius: 100%;
  margin: 10px 5px 0px 0px;
`;

export const Css = styled(FaCss3Alt)`
  color: #2993ee;
  font-size: 2.7rem;
  margin: 0px 5px 5px 0px;
`;

export const NextJs = styled(SiNextDotJs)`
  font-size: 2.7rem;
`;

export const InformationContainer = styled.div`
  display: flex;
  align-content: center;
  padding: 25px 0px 3% 0px;
  align-items: center;

  @media screen and (max-width: 1100px) {
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding-right: 5%;
  }
`;
export const Graduation = styled.div`
  width: 100%;

  @media screen and (max-width: 1100px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Technologies = styled.div`
  width: 100%;
  border-left: solid 5px #8a599b;
  padding-left: 3%;

  @media screen and (max-width: 1100px) {
    border-left: none;
    padding-left: 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;
  }
`;

export const GraduationContent = styled.div`
  display: flex;
  flex-direction: column;
  
  @media screen and (max-width: 1100px) {
    text-align: center;
    justify-content: center;
    align-items: center;
  }
  `;

export const TechnologiesContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 20px;
`;
