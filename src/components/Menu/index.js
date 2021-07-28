import React from "react";
import { Menu, NavLink } from "./Menu";
import { useState } from "react";
import {Link} from 'react-router-dom'
import logo from '../../Images/Logo.svg'

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  const MenuMobile = () => {
    setMenuToggle(!menuToggle);
  };

  return (
    <Menu>
      <Link onClick={MenuMobile}> 
        <img src={logo}/>
      </Link>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About Me</NavLink>
      <NavLink to="/works">My works</NavLink>
    </Menu>
  );
};

export default Navbar;
