import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
const linkStyle = {
  color: `white`,
  padding: '1em',
  fontSize: '12pt',
  border:'2px solid gray',
  margin: "1em",
  backgroundColor: 'pink',
  textDecoration: `none`,
}
const Header = ({ siteTitle }) => (
  <header
    style={{ textAlign: "center", marginBottom: '1em' }}
  >
    <h1 style={{ margin: '0px auto' , maxWidth: '960px', padding: '1em'}}>
      <Link
        to="/"
        style={{ ...linkStyle, backgroundColor: "#FF66C4" }}
      >
        Female Calculator
        </Link>
      <Link
        to="/male-calculator"
        style={{ ...linkStyle, backgroundColor: "#676767" }}
      >
        Male Calculator
        </Link>
    </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
