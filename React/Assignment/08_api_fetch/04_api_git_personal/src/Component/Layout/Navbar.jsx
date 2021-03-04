import PropTypes from "prop-types"
import React from "react"

const Navbar = ({ title }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>{title}</h1>
    </nav>
  )
}
// defining a default props
Navbar.defaultProps = {
  title: "Users Search from Github",
}
Navbar.propTypes = {
  title: PropTypes.string,
}

export default Navbar
