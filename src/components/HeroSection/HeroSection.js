import styled from "styled-components";

export const SwitchTitleContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding-bottom: 2%;
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


export const ImgAbout = styled.img`
  width: 30vw;
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
  font-weight:  400;
  color: #888888;
  font-size: 1.3em;
  margin: 0;

  @media screen and (max-width: 780px) {
    width: 100%;
    padding-right: 5%;
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
  font-size: 3.5em;
  font-weight: 800;
  color: #8a599b;
  margin-right: 35px;
  @media screen and (max-width: 680px) {
    font-size: 2.5em;
  }
  
`;

export const H2 = styled.h2`
  font-size: 2em;
  line-height: 48px;
  font-weight: 500;
  margin-top: 0.5em;
`;

export const EmailContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 2%;
`;
