import React from "react"
import "./Button.css"

const Button = ({ value, onclick }) => {
  return (
    <div>
      <button type="button" onClick={onclick}>
        {value}
      </button>
    </div>
  )
}
export default Button
