import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: var(--col0); position: relative; 
  height: 10vh; 
  display: flex;
  justify-content: center; 
  align-items: center; 
  font-size: 2rem; 
  z-index: 1000; 
  box-shadow:
    2px 2px var(--col6)
`;

export const NavLink = styled(Link)`
  color: var(--col5); background-color: var(--col0);
  display: flex; align-items: center;
  font-size: 80%; 
  padding: 2rem; 
  cursor: pointer;
  height: 5vh; 
  transition: 0.5s; margin: auto; 
  font-family: 'Inconsolata', monospace; font-size: 18px; 
  &:hover {
    box-shadow: 0 3px 0 var(--col6);
    color: var(--col6); 
  }
`;

export const Resume = styled.a`
  color: var(--col6); background-color: var(--col0);
  display: flex; align-items: center;
  font-size: 80%; 
  padding: 2rem; 
  cursor: pointer;
  height: 5vh; 
  transition: 0.5s; 
  margin: auto; margin-left: 5px; 
  border: 2px solid var(--col6); border-radius: 10px; 
  font-family: 'Inconsolata', monospace; font-size: 18px; 

  &:hover {
    background: var(--col6); 
    color: var(--col0);
    box-shadow: 0 0 5px var(--col6), 0 0 25px var(--col6), 0 0 50px var(--col6), 0 0 200px var(--col6);
  }
`;

export const Name = styled(Link)`    
  color: var(--col6); 
  justify-self: start;
  text-decoration: none; 
  font-size: 3vw; 
  margin-left: 0; 
  text-transform: uppercase; 
  -webkit-text-stroke: 0.2vw var(--col6); 
  cursor: pointer;
`;

export const NavMenu = styled.div`
  display: grid; 
  grid-template-columns: repeat(5, auto); 
  grid-gap: 10px; 
  list-style: none; 
  text-align: center; 
  font-weight: bold; 
  width: 70vw; 
  height: 80%; 
  justify-content: end;
`;