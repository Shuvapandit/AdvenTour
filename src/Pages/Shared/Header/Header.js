import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Header.css'

const Header = () => {
    return (
        <Navbar collapseOnSelect sticky='top' expand="lg" bg="primary" variant="dark">
        <Container>
        <Navbar.Brand as={Link} to="home">Adven-Tour..</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="home#services">Services</Nav.Link>
            
            
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link as={Link} to="login">
              LogIn
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
            
        
    );
};

export default Header;