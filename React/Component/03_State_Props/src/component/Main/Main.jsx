import React, { Component } from "react"
import Image from "../Header/Image/Image"
import "./Main.css"
import logo from "./vuejpg"

class Main extends Component {
  render() {
    return (
      <main className="App-main">
        <h3>Here is the main Section</h3>
        <Image source={logo} />
      </main>
    )
  }
}

export default Main
