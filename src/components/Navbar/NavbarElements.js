import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: var(--col1);
  height: 100px; 
  display: flex;
  justify-content: center; 
  align-items: center; 
  font-size: 1.2rem; 
  box-shadow:
    1px 1px #fff
`;

export const NavLink = styled(Link)`
  color: #fff; 
  text-decoration: none; 
  padding: 0.5rem 1rem; 
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &:hover {
    background-color: #01fe87;
    border-radius: 4px; 
    transition: all 0.2s ease-out; 
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