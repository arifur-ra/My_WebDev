import React, { useState } from "react"
import "./Calculator.css"
import Display from "./display/Display"
import Keyboard from "./keyboard/Keyboard"

const Calculator = () => {
  const [result, setResult] = useState("0")

  const CalResult = (value) => {
    setResult(value)
  }
  return (
    <div className="cal">
      <h3>Mini Calculator</h3>
      <Display result={result} />
      <Keyboard finalResult={(value) => CalResult(value)} />
      {/* <Display />
      <Keyboard /> */}
    </div>
  )
}

export default Calculator
