import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const linkStyle = {
  color: `white`,
  padding: '1em',
  fontSize: '12pt',
  margin: "1em",
  border: "2px solid black",
  backgroundColor: 'pink',
  textDecoration: `none`,
}
const Header = ({ siteTitle }) => (
  <header
    style={{ textAlign: "center", marginBottom: '1em' }}
  >
    <h1 style={{ margin: 0 }}>
      <Link
        to="/"
        style={{ ...linkStyle, backgroundColor: "#D8A3C1" }}
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
