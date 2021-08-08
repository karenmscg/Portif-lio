import styled from "styled-components";

export const SwitchPosition = styled.div`
  position: absolute ;
  left: 65%;
  display: flex;
  top: 22%;

  @media screen and (max-width: 880px) {
  position: relative;
  right: 0px;
  }
  
`;

export const SwitchContainer = styled.label`
  position: relative;
  width: 68px;
  height: 30px;
  display: inline-block;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.25), 0px 0px 1px rgba(0, 0, 0, 0.25),
    inset 0px 0px 3px rgba(0, 0, 0, 0.25), inset 0px 0px 3px rgba(0, 0, 0, 0.25);
  border-radius: 38px;
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;

  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  background-color: #ccc;
  transition: 0.4s;

  &:before {
    position: absolute;
    content: "";
    height: 22px;
    width: 22px;
    left: 4px;
    right: 4px;
    bottom: 4px;
    background-color: white;
    border-radius: 50%;
  }
`;

export const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: purple;

    &:before {
      left: 40px;
      transition: 0.5s;
    }
  }
`;
