import React, { Component } from "react"
import "./Display.css"

class Display extends Component {
  render() {
    // return <h2>0{this.state.valueFromInput}</h2>
    return (
      <header>
        <h3>{this.props.result}</h3>
      </header>
    )
  }
}

export default Display
