import React, { Component } from "react"
import "./Button.css"

export class Button extends Component {
  render() {
    return (
      <div>
        <button>{this.props.title}</button>
      </div>
    )
  }
}

export default Button
