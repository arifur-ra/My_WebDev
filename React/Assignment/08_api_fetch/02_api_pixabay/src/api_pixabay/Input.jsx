import React from "react"

const Input = ({ InputHandler, InputValue }) => {
  return (
    <div>
      <input
        type="text"
        onChange={InputHandler}
        placeholder="Search your favorite Images"
      />
      <input
        type="number"
        placeholder=" How many image do you wanna see (3-200)?"
        onChange={InputValue}
      />
    </div>
  )
}

export default Input
