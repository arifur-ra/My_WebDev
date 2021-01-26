import React, { useState } from "react"
import Button from "./Button/Button"
import Input from "./Input/Input"
import "./Keyboard.css"
const Keyboard = ({ finalResult }) => {
  // const [value, setValues] = useState(0)
  const [first, setFirst] = useState(0)
  const [second, setSecond] = useState(0)

  const updateState = (value, seqInput) => {
    if (seqInput === "first") {
      setFirst(parseFloat(value))
    } else if (seqInput === "second") {
      setSecond(parseFloat(value))
    }
  }
  // const setResult = (value) => {
  //   finalResult(value)
  // }

  return (
    <div className="keyboard">
      <Input inputHandler={updateState} seqInput={"first"} />
      <Input inputHandler={updateState} seqInput={"second"} />
      <Button v1={first} v2={second} getResult={finalResult} operation={"+"} />
      <Button v1={first} v2={second} getResult={finalResult} operation={"-"} />
      <Button v1={first} v2={second} getResult={finalResult} operation={"x"} />
      <Button v1={first} v2={second} getResult={finalResult} operation={"/"} />

      {/* <Input />
      <Input />
      <Button />
      <Button />
      <Button />
      <Button /> */}
    </div>
  )
}

export default Keyboard
