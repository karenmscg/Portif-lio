import styled from "styled-components";
import { IoLogoJavascript, IoLogoHtml5 } from "react-icons/io";
import { FaGraduationCap, FaReact } from "react-icons/fa";

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
  padding: 3%;

  @media screen and (max-width: 980px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;
export const Graduation = styled.div`
  border-right: solid 5px #8a599b;
  height: fit-content;
  width: 100%;
`;

export const Tecnologies = styled.div`
  width: 100%;
`;
