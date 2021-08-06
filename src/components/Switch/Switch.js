import styled from "styled-components";

export const SwitchContainer = styled.label`
  position: relative;
  width: 60px;
  height: 26px;
  display: inline-block;
  border-radius: 12px;
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
 

  &:before{
      position: absolute;
      content: "";
      height: 20px;
      width: 20px;
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
          left: 27px;
          transition: 0.2s;
      }
  }
`;
