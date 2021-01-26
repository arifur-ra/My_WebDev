import React from "react"
import "./Input.css"

const Input = ({ seq, getValue }) => {
  return (
    <div className="inp">
      <input
        onChange={(e) => getValue(e.target.value, seq)}
        type="text"
        className={seq}
      />
    </div>
  )
}

export default Input
