import styled from "styled-components";

export const H1 = styled.h1`
  font-weight: bold;
  font-size: 48px;
  line-height: 72px;
  color: #8a599b; ;
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
