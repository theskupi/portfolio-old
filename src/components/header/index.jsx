import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  Collapse,
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
} from 'reactstrap'
import { Link } from 'gatsby'
import logo from "../../assets/images/logo.svg"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <Navbar expand="md" fixed="top" style={{background: "white"}}>
      <Container>
        <NavbarBrand href="/">
          <img src={logo} alt="logo" style={{width: "200px"}} />
        </NavbarBrand>
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
              <Link className="nav-link" to="/playground/">
                Playground
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
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
