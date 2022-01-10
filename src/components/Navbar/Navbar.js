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
          <NavLink to='/About' activeStyle>
            About
          </NavLink>
          <NavLink to='/Portfolio' activeStyle>  
            Portfolio
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;