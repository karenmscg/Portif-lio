import styled from "styled-components";
import { Link } from "react-router-dom";

export const Menu = styled.menu`
  height: 64px;
  top: 0px;
  width: 100%;
  border-style: none none solid none;
  border-bottom-color: purple;
  display: flex;
  align-items: center;
  background-color: #f3cfff;
  position: fixed;
  z-index: 10;

  @media screen and (max-width: 780px) {
    transition: 0.8s all ease;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 780px) {
    display: inline-block;
    position: absolute;
    top: -2vw;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.6rem;
    cursor: pointer;
    color: black;
  }
`;

export const NavMenu = styled.ul`
  @media screen and (max-width: 780px) {
    transition: 0.8s all ease;
    display: flex;
    flex-direction: column;
    position: fixed;
    text-align: center;
    font-weight: bolder;
    opacity: 0.97;
    transition: all 0.4s ease-in;
    width: 100%;
    height: 100%;
    z-index: 5;
    left: ${({ open }) => (open ? 0 : "-100%")};
    top: 63px;
    background-color: #b026ff;
  }
`;

export const Logo = styled(Link)`
  &:hover {
    transform: scale(1.2);
  }
`;

export const NavLinks = styled(Link)`
  font-size: 16px;
  line-height: 24px;
  color: #696969;
  text-decoration: none;
  height: 64px;
  margin-top: 20px;
  margin-right: 20px;

  &:hover {
    border-bottom: purple;
    color: white;
    font-weight: bold;
  }

  @media screen and (max-width: 780px) {
    display: flex;
    color: white;
    align-items: center;
    justify-content: center;

    &:hover {
      transform: scale(1.3);
      transition: 0.5s all ease;
    }
  }
`;
