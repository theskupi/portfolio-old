import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Collapse,
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
} from 'reactstrap';
import { Link } from 'gatsby';
// @ts-ignore
import logo from '../../assets/images/logo.svg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const homeLink = () => (
    <Link to="/">
      <img src={logo} alt="logo" style={{ width: '200px' }} />
    </Link>
  );

  return (
    <Navbar className='navbar-light' expand="md" fixed="top" style={{ backgroundColor: 'white' }}>
      <Container>
        <NavbarBrand tag={homeLink} />
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/webpages/">
                Webpages
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/contact/">
                Contact
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
