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