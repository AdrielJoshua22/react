import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink} from 'react-router-dom';
import { CartWidget } from '../CartWidget/cartWidget';


const NavBar = () => {
 

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link to="/">
          Mi Tienda      //
        </Link>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/categoria/cuadros-minimalistas">     Minimalistas</NavLink>
             <NavLink to="/categoria/cuadros-flores">//        Flores</NavLink>
             
            
          </Nav>
          <Nav>
            <Link to="/cart" >
              <CartWidget />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default NavBar