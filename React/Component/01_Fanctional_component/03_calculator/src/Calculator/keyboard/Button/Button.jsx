import React from "react"
import "./Button.css"

const Button = ({ v1, v2, operation, getResult }) => {
  const Calculate = (e) => {
    e.preventDefault()

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
  return (
    <div className="btn">
      <button onClick={(e) => Calculate(e)}>{operation}</button>
      {/* <button>{operation}</button> */}
    </div>
  )
}

export default Button
