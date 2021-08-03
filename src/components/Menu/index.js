import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";
import { Menu, NavLinks, MobileIcon, NavMenu } from "./Menu";
import logo from "../../Images/Logo.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menuToggle = () => {
    return setOpen(!open);
  };
  const closeMenu = () => {
    return setOpen(false);
  };

  return (
    <Menu>
      <Link to="/">
        <img src={logo} />
      </Link>
      <MobileIcon onClick={menuToggle}>
        {open ? <FaTimes /> : <FaBars />}
      </MobileIcon>
      <NavMenu onClick={menuToggle} open={open}>
        <NavLinks onclick={closeMenu} to="/">
          Home
        </NavLinks>
        <NavLinks onclick={closeMenu} to="/ about">
          About Me
        </NavLinks>
        <NavLinks onclick={closeMenu} to="/ works">
          My works
        </NavLinks>
      </NavMenu>
    </Menu>
  );
};

export default Navbar;
