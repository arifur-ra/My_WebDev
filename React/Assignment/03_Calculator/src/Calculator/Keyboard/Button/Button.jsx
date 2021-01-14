import React, { Component } from "react"
import "./Button.css"

export class Button extends Component {
  Calculate = (e) => {
    e.preventDefault()
    let { operation, v1, v2, getResult } = this.props

    switch (operation) {
      case "+":
        getResult(v1 + v2)
        break
      case "-":
        getResult(v1 - v2)

        break
      case "/":
        getResult(v1 / v2)

        break
      case "x":
        getResult(v1 * v2)

        break

      default:
        break
    }
  }
  render() {
    return (
      <div className="btn">
        <button onClick={(e) => this.Calculate(e)}>
          {this.props.operation}
        </button>
      </div>
    )
  }
}

export default Button
