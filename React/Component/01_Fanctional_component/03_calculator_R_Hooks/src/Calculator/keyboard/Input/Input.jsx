import React from "react"
import "./Input.css"

const Input = ({ seqInput, inputHandler }) => {
  return (
    <div className="inp">
      <input
        onChange={(e) => inputHandler(e.target.value, seqInput)}
        type="text"
      />
    </div>
  )
}

export default Input
