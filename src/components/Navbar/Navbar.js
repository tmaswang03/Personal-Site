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
            <span style = {{color: "var(--col6)"} }>01.&nbsp;</span>
            About
          </NavLink>
          <NavLink to='/Portfolio' activeStyle>  
            <span style = {{color: "var(--col6)"} }>02.&nbsp;</span>
            Portfolio
          </NavLink>
          <NavLink to='/Timeline' activeStyle> 
          <span style = {{color: "var(--col6)"} }>03.&nbsp;</span> 
            Timeline
          </NavLink>
          <Resume href = "https://bit.ly/3ll8fpY"  target="_blank">Resume</Resume>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;