import React from "react"

const Input = ({ changeInput, addName }) => {
  return (
    <div>
      <input
        type="text"
        name="text"
        id="text"
        placeholder="Add Item"
        onChange={(e) => changeInput(e)}
      />
      <button className="addBtn" onClick={(e) => addName(e)}>
        Add Item
      </button>
    </div>
  )
}

export default Input
