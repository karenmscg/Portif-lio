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
  margin: 0;
  background-color: #F3CFFF;

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
    position: absolute;
    text-align: center;
    font-weight: bolder;
    opacity: 0.9;
    transition: all 0.4s ease-in;
    width: 90%;
    height:80vh;
    z-index: 5;
    left: ${({ open }) => (open ? 0 : "-100%")};
    top: 63px;
    background-color: #B026FF;
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
    text-decoration: underline;
    color: purple;
    font-weight: bold;
  }

  @media screen and (max-width: 780px) {
    display: table;
    color: white;

    &:hover {
      color: blue;
    }
  }
`;
