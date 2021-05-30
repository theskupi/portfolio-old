import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header>
    <div className="container">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/">{siteTitle}</Link>
          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            <Link className="navbar-item" to="/">
              Home
            </Link>
            <Link className="navbar-item" to="/webpages/">
              Webpages
            </Link>
            <Link className="navbar-item" to="/playground/">
              Playground
            </Link>
            <Link className="navbar-item" to="/contact/">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
