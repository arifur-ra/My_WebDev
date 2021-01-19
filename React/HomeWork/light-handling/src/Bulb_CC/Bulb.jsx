import React, { Component } from "react"
import "./Bulb.css"
import Button from "./Button/Button"
import Light from "./Light/Light"

class Bulb extends Component {
  state = {
    light: true,
  }
  clickHandler = () => {
    this.setState((prevState) => ({
      light: !prevState.light,
    }))
  }
  render() {
    return (
      <div className="container">
        <h1>
          Turning Light <span>ON</span> / <b>OFF</b>
        </h1>
        <Light switchLight={this.state.light} />
        <Button click={this.clickHandler} toggleButton={this.state.light} />
      </div>
    )
  }
}

export default Bulb
