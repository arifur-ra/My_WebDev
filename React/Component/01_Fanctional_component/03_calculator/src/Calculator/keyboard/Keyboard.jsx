import React, { useState } from "react"
import Button from "./Button/Button"
import Input from "./Input/Input"
import "./Keyboard.css"
const Keyboard = ({ finalResult, first, second }) => {
  const [value, setValues] = useState(" ")
  const setValue = (value, seq) => {
    setValues({
      [seq]: parseFloat(value),
    })
  }
  const setResult = (value) => {
    finalResult(value)
  }

  return (
    <div className="keyboard">
      <Input getValue={setValue} seq={"first"} />
      <Input getValue={setValue} seq={"second"} />
      <Button
        v1={first}
        v2={second}
        getResult={(value) => setResult(value)}
        operation={"+"}
      />
      <Button
        v1={first}
        v2={second}
        getResult={(value) => setResult(value)}
        operation={"-"}
      />
      <Button
        v1={first}
        v2={second}
        getResult={(value) => setResult(value)}
        operation={"x"}
      />
      <Button
        v1={first}
        v2={second}
        getResult={(value) => setResult(value)}
        operation={"/"}
      />

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
