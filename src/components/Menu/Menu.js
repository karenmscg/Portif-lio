import styled from "styled-components";
import { Link  } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Menu = styled.menu`
  height: 64px;
  top: 0px;
  width: 100%;
  border-style: none none solid none;
  border-bottom-color: purple;
  display: flex;
  align-items: center;
  margin:0;

  @media screen and (max-width: 780px) {
    transition: 0.8s all ease;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 780px) {
    display: inline-block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: black;
   
  }
`;

export const NavMenu = styled.ul`
  justify-self: center;

  @media screen and (max-width: 780px) {
    transition: 0.8s all ease;
    display: none;
  }
`;
export const NavLinks = styled(Link)`
  font-size: 16px;
  line-height: 24px;
  color: #696969;
  text-decoration: none;
  height: 64px;

  &:hover {
    text-decoration: underline;
    color: purple;
  }
`;
export const MenuIcon = styled.div`
  width: 33px;
  height: 26.48px;
`;
