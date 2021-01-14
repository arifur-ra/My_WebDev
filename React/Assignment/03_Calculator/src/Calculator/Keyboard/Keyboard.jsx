import React, { Component } from "react"
import Button from "./Button/Button"
import Input from "./Input/Input"
import "./Keyboard.css"

export class Keyboard extends Component {
  state = {
    // number1: 0,
    // number2: 0,
    // first: 0,
    // second: 0,
    // result: 0,
  }
  setValue = (value, seq) => {
    this.setState({
      [seq]: parseFloat(value),
    })
  }
  // getNumberOne = (value) => {
  //   this.setState({
  //     number1: parseFloat(value),
  //   })
  // }
  // getNumberTwo = (value) => {
  //   this.setState({
  //     number2: parseFloat(value),
  //   })
  // }
  setResult = (value) => {
    this.props.finalResult(value)
  }
  render() {
    return (
      <div className="keyboard">
        {/* for Input Value */}
        <Input getValue={this.setValue} seq={"first"} />
        <Input getValue={this.setValue} seq={"second"} />

        {/* for  BUtton */}
        <Button
          v1={this.state.first}
          v2={this.state.second}
          getResult={this.setResult}
          operation={"+"}
        />
        <Button
          v1={this.state.first}
          v2={this.state.second}
          getResult={this.setResult}
          operation={"-"}
        />
        <Button
          v1={this.state.first}
          v2={this.state.second}
          getResult={this.setResult}
          operation={"x"}
        />
        <Button
          v1={this.state.first}
          v2={this.state.second}
          getResult={this.setResult}
          operation={"/"}
        />
      </div>
    )
  }
}

export default Keyboard
