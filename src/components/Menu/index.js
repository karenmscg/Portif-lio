import React from "react";
import { Menu, NavLinks, MobileIcon, NavMenu } from "./Menu";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Images/Logo.svg";
import { FaBars } from "react-icons/fa";

const Navbar = (toggle) => {

  return (
    <Menu>
      <Link>
        <img src={logo} />
      </Link>
      <MobileIcon onClick = {toggle}>
        <FaBars />
      </MobileIcon>
      <NavMenu>
        <NavLinks to="/">Home</NavLinks>
        <NavLinks to="/about">About Me</NavLinks>
        <NavLinks to="/works">My works</NavLinks>
      </NavMenu>
    </Menu>
  );
};

export default Navbar;
