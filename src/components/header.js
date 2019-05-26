import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/macro_calc_header.png"
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
    <img src={logo}></img>
    <h1 className="section" style={{ margin: '0px auto' , maxWidth: '960px', padding: '1em'}}>
      <Link
        to="/"
        style={{ ...linkStyle, backgroundColor: "#ff99d6" }}
      >
        Female Calculator
        </Link>
      <Link
        to="/male-calculator"
        style={{ ...linkStyle, backgroundColor: "#599956" }}
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
