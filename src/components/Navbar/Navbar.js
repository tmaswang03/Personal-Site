import React from 'react';
import {
  Nav,
  NavLink,
  Name,
  NavMenu,
  Resume, 
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
            <span style = {{color: "var(--col6)"} }>&lt;</span>
            About
            <span style = {{color: "var(--col6)"} }>/&gt;</span>
          </NavLink>
          <NavLink to='/Portfolio' activeStyle>  
          <span style = {{color: "var(--col6)"} }>&lt;</span>
            Portfolio
            <span style = {{color: "var(--col6)"} }>/&gt;</span>
          </NavLink>
          <NavLink to='/Timeline' activeStyle> 
          <span style = {{color: "var(--col6)"} }>&lt;</span>
            Timeline
            <span style = {{color: "var(--col6)"} }>/&gt;</span>
          </NavLink>
          <Resume href = "https://bit.ly/3ll8fpY"  target="_blank">Resume</Resume>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;