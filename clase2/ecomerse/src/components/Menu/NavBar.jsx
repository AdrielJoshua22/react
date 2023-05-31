 import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import { CartWidget } from '../CartWidget/cartWidget';

import Button from 'react-bootstrap/Button';

const NavBar = () => {


  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>

        <Button variant="secondary"><Link to="/">
          Mi Tienda
        </Link></Button>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

            <Button variant="secondary"><NavLink to="/categoria/cuadros-minimalistas">  Minimalistas</NavLink></Button>
            <Button variant="secondary"><NavLink to="/categoria/cuadros-flores"> Flores</NavLink></Button>

          </Nav>
          <Nav>
            <Button variant="secondary">  <Link to="/cart"> <CartWidget /></Link></Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default NavBar 


/* import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">MunhoDeco.co</div>
        <ul className="navbar-menu">
          <li className="navbar-item"><a href="/">Inicio</a></li>
          <li className="navbar-item"><a href="/productos">Productos</a></li>
          <li className="navbar-item"><a href="/servicios">Servicios</a></li>
          <li className="navbar-item"><a href="/contacto">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
 */