import React from "react"
import "../../App.css"

const Display = ({ participant, name, warning }) => {
  // const {number,nameOfClass}=props
  return (
    <div className="display">
      <h5>{warning}</h5> <br />
      <h4>
        Note: <span>participants can not be less than 0 & more than 15</span>
      </h4>
      <h1>
        We are here <span>{participant} </span> Participants in class
        <span> {name}</span>{" "}
      </h1>
    </div>
  )
}

export default Display
