import styled from "styled-components";
import vector from "../../Images/Vector.svg";

export const HeroContainer = styled.div`
  padding-left: 5%;
  display: flex;
  flex-direction: column;
  margin-bottom: 3px;
  background-image: url(${vector});
  background-repeat: no-repeat;
  background-position-x: right;
  background-position-y: 100%;
`;

export const ButtonContainer = styled.div``;

export const Button = styled.button`
  background: ${(props) => (props.primary ? "#EE5CE6" : "transparent")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};
  width: 122px;
  height: 30px;
  border: 1.5px solid #ee5ce6;
  box-sizing: border-box;
  filter: drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.5));
  border-radius: 10px;
  margin-right: 5px;
  cursor: pointer;

  &:hover {
    color: black;
    transition: 0.8s;
  }
`;

export const Img = styled.img`
  margin-right: 0px;
  width: 95vw;
`;

export const P = styled.p`
  width: 70%;
  font-weight: bold;
  color: #888888;
  margin: 2px;
`;

export const H1 = styled.h1`
  font-size: 48px;
  line-height: 72px;
  font-weight: bold;
  color: #8a599b;
  margin: 2px;
`;

export const H2 = styled.h2`
  margin-top: 45px;
  font-size: 32px;
  line-height: 48px;
`;
