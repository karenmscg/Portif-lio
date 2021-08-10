import styled from "styled-components";
import { IoLogoJavascript, IoLogoHtml5 } from "react-icons/io";
import { FaGraduationCap, FaReact } from "react-icons/fa";

export const HeroContainer = styled.div`
  padding-left: 5%;
  width: 100%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 18%;
  padding-top: 2%;
  justify-content: space-between;

  @media screen and (max-width: 780px) {
    width: fit-content;
  }
`;

export const Button = styled.a`
  background: ${(props) => (props.primary ? "#EE5CE6" : "transparent")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};
  width: 122px;
  height: 30px;
  border: 1.5px solid #ee5ce6;
  box-sizing: border-box;
  border-radius: 10px;
  margin-bottom: 0px;
  text-align: center;
  text-decoration: none;
  position: relative;

  &:hover {
    color: black;
    transition: 0.8s;
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;

  width: 100%;
  @media screen and (max-width: 780px) {
    flex-direction: row;
  }
`;

export const Img = styled.img``;

export const ImgAbout = styled.img`
  width: 40vw;
  border-radius: 300px;
  background-color: linear-gradient(to right, red, purple);
  overflow: hidden;
  filter: saturate(0);
  padding: 5% 5% 3% 0;

  &:hover {
    filter: saturate(1);
    transition: ease 0.3s all;
  }

  @media screen and (max-width: 780px) {
    object-fit: scale-down;
  }
`;

export const P = styled.p`
  width: 70%;
  font-weight: 400 bolder;
  color: #888888;
  font-size: 20px;
  margin: 0;

  @media screen and (max-width: 680px) {
    font-size: 15px;
  }
`;

export const H4 = styled.h4`
  margin-right: 1%;
  width: 70%;
  font-weight: 400 bolder;
  font-size: 20px;

  @media screen and (max-width: 680px) {
    font-size: 15px;
  }
`;

export const H1 = styled.h1`
  font-size: 48px;
  font-weight: 800;
  color: #8a599b;
  padding-bottom: 2%;
`;

export const H2 = styled.h2`
  margin-top: 45px;
  font-size: 32px;
  line-height: 48px;
  font-weight: 500;

  @media screen and (max-width: 680px) {
    font-size: 30px;
  }

  @media screen and (min-width: 1148px) {
  }
`;

export const EmailContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 2%;
`;

export const IoJS = styled(IoLogoJavascript)`
  background-color: yellow;
  font-size: 3rem;
  color: black;
`;

export const Html5 = styled(IoLogoHtml5)`
  font-size: 3rem;
  color: orange;
`;
export const React = styled(FaReact)`
  font-size: 3rem;
  color: aqua;
`;
export const GraduationCap = styled(FaGraduationCap)`
  font-size: 3rem;
  color: navy;
  background-color: violet;
  background-size: 10rem;
  border-radius: 100%;
`;

export const Container = styled.div`
  display: flex;
  align-content: center;

  @media screen and (max-width: 980px) {
    flex-wrap: wrap;
    justify-content: right;
  }
`;
export const Graduation = styled.div`
  border-right: solid 5px #8a599b;
  height: fit-content;
`;
export const Tecnologies = styled.div``;
