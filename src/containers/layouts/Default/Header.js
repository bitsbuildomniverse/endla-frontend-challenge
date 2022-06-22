import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Logo from '../../../components/Logo';
import Account from '../../../components/Account';

const Header = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        className="custom-nav"
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Brand>
          <Logo />
        </Navbar.Brand>
        <div></div>
        <Account />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
              as={NavLink}
              exact
              to="/"
            >
              Well Profile
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
