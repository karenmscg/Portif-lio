import styled from "styled-components";

export const SwitchPosition = styled.div``;

export const SwitchContainer = styled.label`
  position: relative;
  width: 68px;
  height: 30px;
  display: inline-block;
  box-shadow: 0px 0px 1px rgb(250 246 246 / 25%),
    0px 0px 1px rgb(255 255 255 / 25%), inset 0px 0px 3px rgb(227 204 204 / 25%),
    inset 0px 0px 3px rgb(132 61 61 / 25%);
  border-radius: 38px;
`;

export const Slider = styled.span`
  position: flex;
  cursor: pointer;
  transition: 0.4s;

  &:before {
    position: absolute;
    content: "";
    height: 22px;
    width: 22px;
    left: 4px;
    right: 4px;
    bottom: 4px;
    background-color: pink;
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
