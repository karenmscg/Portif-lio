import styled from "styled-components";

export const ItemsContainer = styled.div`


export const Image = styled.img`
  width: 15em;
  height: 25em;
  margin-bottom: 15%;
  border:solid 2px purple ;
  filter: saturate(0);
    
  :hover{
    filter: saturate(1);
  }
`;
