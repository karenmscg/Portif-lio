import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: #8a599b;
  padding: 2rem 0 2rem 0;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 880px) {
    padding: 1rem 0 1rem 0;
  }
`;

export const MidiasSociais = styled.div``;
export const IconsMidias = styled.div`
  color: white;
  position: absolute;
`;
export const MidiaLink = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const A = styled.a`
  color: white;
  font-size: x-large;
  margin-right: 3px;
`;

export const P1 = styled.p`
  color: white;
  margin-right: 5px;
  text-align: center;
`;
