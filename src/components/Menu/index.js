import React from "react";
import { Menu, NavLinks, MobileIcon, NavMenu } from "./Menu";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Images/Logo.svg";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [hamburguer, setHamburguer] = useState(true);

  const handleClick = () => {
    return setOpen(!open);
  };
  const closeMenu = () => {
    return setOpen(false);
  };

  return (
    <Menu>
      <Link>
        <img src={logo} />
      </Link>
      <MobileIcon onClick = {handleClick}>{open ? <FaTimes /> : <FaBars />}</MobileIcon>
      <NavMenu>
        <NavLinks to="/">Home</NavLinks>
        <NavLinks to="/about">About Me</NavLinks>
        <NavLinks to="/works">My works</NavLinks>
      </NavMenu>
    </Menu>
  );
};

export default Navbar;
