import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: var(--col1);
  height: 10vh; 
  display: flex;
  justify-content: center; 
  align-items: center; 
  font-size: 2rem; 
  box-shadow:
    2px 2px var(--col6)
`;

export const NavLink = styled(Link)`
  color: var(--col6); background-color: var(--col1);
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 80%; 
  padding: 2rem; 
  cursor: pointer;
  height: 8vh; 
  transition: 0.5s; 
  justify-content: center;  
  &:hover {
    background: var(--col6); 
    color: #050801;
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