import logo from '../resources/cielo-logo.png';
import '../styles/style.blue.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope , faPhone } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Container, Nav } from 'react-bootstrap';
import CartWidget from './CartWidget';

function NavBar() {
    return (
      <header className='nav-holder'>
        <Navbar collapseOnSelect expand="lg" bg="withe" className='text-center'>
        <Container>
        <Link to='/'><Navbar.Brand href="#home"><img className=' d-md-inline-block' src={logo} alt='Cielo logo'></img></Navbar.Brand></Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="/">HOME</Nav.Link>
          <Nav.Link href="/about">QUIENES SOMOS</Nav.Link>
          <Nav.Link href="/mantyhabilit">MANTENIMIENTO Y HABILITACIONES</Nav.Link>
          <Nav.Link href="/cirrus">CIRRUS AIRCRAFT</Nav.Link>
          <Nav.Link href="/ventas">VENTAS</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href='/contacto'><FontAwesomeIcon icon={faEnvelope} style={{color: '#467FBF'}}/></Nav.Link>
          <Nav.Link href='/contacto'><FontAwesomeIcon icon={faPhone} style={{color: '#467FBF'}}/></Nav.Link>
          <Nav.Link><CartWidget/></Nav.Link>
        </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
      </header>
    );
}

export default NavBar;

