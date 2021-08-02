import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export const MenuContainer = styled.aside`
  position: fixed;
  z-index: 2;
  background-color: blueviolet;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ menuToggle }) => (menuToggle ? "100%" : "0")};
  opacity: ${({ menuToggle }) => (menuToggle ? "0" : "-100%")};
  z-index: 10;
`;

export const CloseIcon = styled(FaTimes)`
  color: white;
`;

export const Icon = styled.div`
  cursor: pointer;
`;
export const SideBarMenu = styled.div``;

export const SideBarLink = styled(Link)`
  display: flex;
  align-items: center;
  list-style: none;
  transition: 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
      transition: 0.2s ease-in-out ;
  }
`;
