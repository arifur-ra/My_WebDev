import React, { Component } from "react"
import Button from "./Button/Button"
import Input from "./Input/Input"
import "./Keyboard.css"

export class Keyboard extends Component {
  render() {
    return (
      <div className="key">
        <Input />
        <Button mode={"input"} title={"+"} />
        <Button mode={"input"} title={"-"} />
        <Button mode={"input"} title={"x"} />
        <Button mode={"input"} title={"/"} />
      </div>
    )
  }
}

export default Keyboard
