import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Menu = styled.menu`
  height: 64px;
  top: 0px;
  width: 100%;
  border-style:none none solid none;
  border-bottom-color: purple;
  display: flex;
  justify-content: space-around;
`;

export const NavLink = styled(Link)`
  font-size: 16px;
  line-height: 24px;
  color: #696969;
  text-decoration: none;
 
`;

export const MenuIcon = styled.div`
  width: 33px;
  height: 26.48px;
`;


