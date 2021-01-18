import React, { Component } from "react"
import "./Header.css"

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <ul>
          <li>Home</li>
          <li>Offers</li>
          <li>Design</li>
          <li>Others</li>
        </ul>
      </div>
    )
  }
}

export default Header
