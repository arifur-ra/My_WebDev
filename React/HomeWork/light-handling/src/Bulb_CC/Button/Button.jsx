import React, { Component } from "react"

class Button extends Component {
  render() {
    const { click, toggleButton } = this.props
    return (
      <div>
        <button onClick={click}>{toggleButton ? "ON" : "OFF"}</button>
      </div>
    )
  }
}

export default Button
