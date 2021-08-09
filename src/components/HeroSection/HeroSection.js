import styled from "styled-components";

export const HeroContainer = styled.div`
  padding-left: 5%;
  width: 100%;
  display: grid;
  flex-direction: column;
  margin-bottom: 3px;
  padding-top: 3%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: fit-content;
  padding-top: 2%;
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

export const Img = styled.img`
  object-fit: cover;
  margin-left: 65%;

  @media screen and (max-width: 970px) {
    margin:auto;
    width: 95%;
  }
`;

export const ImgAbout = styled.img `
width: 50%;
height: 50%;
margin-left: 50%;
;`

export const P = styled.p`
  width: 70%;
  font-weight: 400 bolder;
  color: #888888;
  font-size: 20px;

  @media screen and (max-width: 680px) {
    font-size: 15px;
  }
`;

export const H4 = styled.h4`
  margin-right: 1%;
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
