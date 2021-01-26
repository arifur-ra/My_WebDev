import React, { useState } from "react"
import "./Calculator.css"
import Display from "./display/Display"
import Keyboard from "./keyboard/Keyboard"

const Calculator = () => {
  const [result, setResult] = useState(0)

  return (
    <div className="cal">
      <h3>Mini Calculator</h3>
      <Display result={result} />
      <Keyboard finalResult={(value) => setResult(value)} />
    </div>
  )
}

export default Calculator
