import styled from "styled-components";
import vector from "../../Images/Vector.svg";

export const HeroContainer = styled.div`
  padding-left: 5%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 3px;
  background-image: url(${vector});
  background-repeat: no-repeat;
  background-position-x: right;
  background-position-y: 100%;
`;

export const ButtonContainer = styled.div`
display:flex;
flex-wrap: wrap;
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
  font-weight: 400 bold;
  color: #888888;
`;

export const H4 = styled.h4`
  margin-right: 1%;
`;

export const H1 = styled.h1`
  font-size: 48px;
  line-height: 72px;
  font-weight: 800;
  color: #8a599b;
  margin: 2px;
`;

export const H2 = styled.h2`
  margin-top: 45px;
  font-size: 32px;
  line-height: 48px;
  font-weight: 500;
`;

export const EmailContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

