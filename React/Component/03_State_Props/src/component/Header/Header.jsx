import React, { Component } from "react"
import Anchor from "./Anchor/Anchor"
import "./Header.css"
import Image from "./Image/Image"
import logo from "./logo.svg"
import Para from "./Para/Para"

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <Image source={logo} />
        <Para />
        <Anchor />
      </header>
    )
  }
}

export default Header
