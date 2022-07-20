import React from "react";

import "./NavBar.scss";

import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navBar">
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Container>
          <div className="left">
            <Navbar.Brand as={Link} to="/">
              <span className="link">React-Bootstrap</span>
            </Navbar.Brand>
          </div>
          <div className="right justify-content-end">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                <Nav.Link as={Link} to="/">
                  <span className="link"> Home</span>
                </Nav.Link>

                <Nav.Link as={Link} to="/discography">
                  <span className="link"> Discography</span>
                </Nav.Link>

                <Nav.Link as={Link} to="/events">
                  <span className="link">Events</span>
                </Nav.Link>

                <Nav.Link as={Link} to="/merch">
                  <span className="link"> Merch</span>
                </Nav.Link>

                <Nav.Link as={Link} to="/contact-us">
                  <span className="link"> Contact Us</span>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
