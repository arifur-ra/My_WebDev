import React, { Component } from "react"
import "./Calculator.css"
import Display from "./Display/Display"
import Keyboard from "./Keyboard/Keyboard"

class Calculator extends Component {
  state = {
    result: 0,
  }

  calResult = (value) => {
    this.setState({
      result: value,
    })
  }
  render() {
    return (
      <div className="cal">
        <h3>Mini Calculator</h3>
        <Display result={this.state.result} />
        <Keyboard finalResult={this.calResult} />
      </div>
    )
  }
}

export default Calculator
