import styled from "styled-components";

export const HeroContainer = styled.div`
  margin-left: 5%;
  background-repeat: no-repeat;
  background-size: 40%;
  display: flex;
  flex-direction: column;
`;
export const H1 = styled.h1`
  font-size: 48px;
  font-weight: bold;
  color: #8a599b;
  margin: 2px;
`;
export const Button = styled.button`
  background: ${(props) => (props.primary ? "#EE5CE6" : "transparent")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};
  width: 122px;
  height: 30px;
  border: 1.5px solid #ee5ce6;
  box-sizing: border-box;
  filter: drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.5));
  border-radius: 10px;
`;

export const Img = styled.img`
  width: 95%;
`;

export const P = styled.p`
  width: 70%;
  font-weight: bold;
  color: #888888;
`;
