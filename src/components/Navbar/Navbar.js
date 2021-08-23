import React from 'react';
import {
  Nav,
  NavLink,
  Name,
  NavMenu,
} from './NavbarElements';
import './Logo.css'
import logo from './logo.png';
import logo_green from './logo_green.png';

const Navbar = () => {
  return (
    <>
      <Nav>
        <img src={logo_green} className = "Logo"/>
        <Name to = '/' activeStyle>
          Thomas  
        </Name>
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/services' activeStyle>
            Services
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            Contact Us
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;