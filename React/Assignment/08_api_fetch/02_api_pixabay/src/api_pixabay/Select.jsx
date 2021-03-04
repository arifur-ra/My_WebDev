import React from "react"
import "./Pixabay.css"

const Select = ({ clickHandler, getSelectValue }) => {
  return (
    <div>
      <form action="#">
        <label for="num">How many item do you want?</label>
        <select name="num" id="nums" onChange={getSelectValue}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
        <button onClick={clickHandler}>Search</button>
      </form>
    </div>
  )
}

export default Select
