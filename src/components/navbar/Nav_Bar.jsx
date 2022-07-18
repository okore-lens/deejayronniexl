import React from 'react'

import './Nav_Bar.scss';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';


function Nav_Bar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand >React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <LinkContainer to='/'>
                <Nav.Link >Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/discography'>
                <Nav.Link>Discography</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/events'>
                <Nav.Link>Events</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/merch'>
                <Nav.Link>Merch</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/contact-us'>
                <Nav.Link>Contact Us</Nav.Link>    
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav_Bar;