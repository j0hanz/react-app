// src/components/Navbar.js
import React from 'react';
import { Navbar, Nav, Container, Form } from 'react-bootstrap';

function MyNav({ toggleDarkMode, darkMode }) {
  return (
    <Navbar
      bg={darkMode ? 'dark' : 'light'}
      variant={darkMode ? 'dark' : 'light'}
      expand="lg"
      className="px-5"
    >
      <Container>
        <Navbar.Brand href="Home">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="Home">About</Nav.Link>
          </Nav>
          <Form.Check
            type="switch"
            id="dark-mode-switch"
            label="Dark Mode"
            checked={darkMode}
            onChange={toggleDarkMode}
            className={darkMode ? 'text-light' : 'text-dark'}
          />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;
