import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: var(--col1); position: relative; 
  height: 5rem; 
  display: flex;
  justify-content: center; 
  align-items: center; 
  font-size: 2rem; 
  z-index: 1000; 
  box-shadow:
    2px 2px var(--col6)
`;

export const NavLink = styled(Link)`
  color: var(--col10); background-transparency: 100%; 
  display: flex; align-items: center;
  font-size: 0.7; 
  padding: 1rem; 
  cursor: pointer;
  height: 3rem; 
  transition: 0.5s; margin: auto; font-weight: 400; 
  font-family: 'Inconsolata', monospace; font-size: 19px; 
  &:hover {
    color: var(--col6); 
  }
`;

export const Resume = styled.a`
  color: var(--col6); background-color: var(--col1);
  display: flex; align-items: center;
  font-size: 0.7; 
  padding: 1rem; 
  cursor: pointer;
  height: 3rem; 
  transition: 0.5s; 
  margin: auto; margin-left: 5px; 
  border: 2px solid var(--col6); border-radius: 10px; 
  font-family: 'Inconsolata', monospace; font-size: 18px; font-weight: 400; 
  &:hover {
    background: var(--col6); 
    color: var(--col0);
    // box-shadow: 0 0 5px var(--col6), 0 0 5px var(--col6), 0 0 5px var(--col6), 0 0 100px var(--col6);
  }
`;

export const Name = styled(Link)`    
  color: var(--col6); 
  justify-self: start;
  text-decoration: none; 
  font-size: 3rem; 
  margin-left: 0; 
  text-transform: uppercase; 
  -webkit-text-stroke: 0.2vw var(--col6); 
  cursor: pointer;
`;

export const NavMenu = styled.div`
  display: grid; 
  grid-template-columns: repeat(5, auto); 
  grid-gap: 1rem; 
  list-style: none; 
  text-align: center; 
  font-weight: bold; 
  width: 75rem; 
  height: 8rem; 
  justify-content: end;
`;