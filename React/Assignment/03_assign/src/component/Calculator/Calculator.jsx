import React, { Component } from "react"
import "./Calculator.css"
import Display from "./Display/Display"
import Keyboard from "./Keyboard/Keyboard"

class Calculator extends Component {
  render() {
    return (
      <div className="cal">
        <Display />
        <Keyboard />
      </div>
    )
  }
}

export default Calculator
