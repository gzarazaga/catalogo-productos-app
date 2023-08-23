import React from 'react';
import logo from '../assets/logo.png'; // Asegúrate de tener la imagen del logo en la carpeta assets
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #333;
  color: white;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  
  img {
    width: 60px;
    height: auto;
    margin-right: 0.5rem;
  }
  
  span {
    font-size: 1.5rem;
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  
  li {
    margin: 0 1rem;
  }
  
  a {
    color: white;
    text-decoration: none;
    font-size: 1.7rem;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Navbar = () => {
  return (
    <Nav className="navbar">
      <Logo>
        <img src={logo} alt="Logo de la tienda" />
        <span>La Tiendita</span>
      </Logo>
      <NavLinks>
        <li><a href="/">Inicio</a></li>
        <li><a href="/productos">Productos</a></li>
        <li><a href="/carrito">Carrito</a></li>
      </NavLinks>
    </Nav>
  );
}

export default Navbar;
