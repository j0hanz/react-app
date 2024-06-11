import React from 'react';
import { Navbar, Nav, Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faMoon } from '@fortawesome/free-solid-svg-icons';

function MyNav({ toggleDarkMode, darkMode }) {
  return (
    <Navbar
      bg={darkMode ? 'dark' : 'light'}
      variant={darkMode ? 'dark' : 'light'}
      expand="lg"
      className="px-5"
    >
      <Navbar.Brand as={NavLink} to="/">
        <span className="me-3">
          <FontAwesomeIcon className="fa-lg" icon={faHouse} />
        </span>
      </Navbar.Brand>
      <div className="mt-1">
        <Form.Check
          type="switch"
          id="dark-mode-switch"
          label={<FontAwesomeIcon icon={faMoon} />}
          checked={darkMode}
          onChange={toggleDarkMode}
          className={darkMode ? 'text-light' : 'text-dark'}
        />
      </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-5">
          <Nav.Link as={NavLink} to="/clock">
            Clock
          </Nav.Link>
          <Nav.Link as={NavLink} to="/counter">
            Counter
          </Nav.Link>
          <Nav.Link as={NavLink} to="/cycle">
            Loading Demo
          </Nav.Link>
          <Nav.Link as={NavLink} to="/update">
            Update
          </Nav.Link>
          <Nav.Link as={NavLink} to="/tracker">
            Tracker
          </Nav.Link>
          <Nav.Link as={NavLink} to="/search">
            Search
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNav;
