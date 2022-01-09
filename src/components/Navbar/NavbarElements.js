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
    2px 2px var(--col5)
`;

export const NavLink = styled(Link)`
  color: var(--col6); 
  text-decoration: none; 
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 2.5vh; 
  padding: 25px;
  cursor: pointer;
  border: 1px solid var(--col5);  
  height: 3vw;
  width: auto; 
  margin: auto auto; 
  background: -webkit-linear-gradient(0deg, transparent 50%, var(--col6) 50%); 
  background-size: 100vw 100vw; 
  transition: 0.5s; 
  justify-content: center;  
  &:hover {
    background-position: 50vw 0; 
    color: var(--col1); 
  }
`;



export const Name = styled(Link)`    
  color: #01fe87; 
  justify-self: start;
  text-decoration: none; 
  font-size: 3vw; 
  margin-left: 0; 
  text-transform: uppercase; 
  -webkit-text-stroke: 0.2vw #01fe87;
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