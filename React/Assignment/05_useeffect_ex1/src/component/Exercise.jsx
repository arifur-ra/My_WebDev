import React, { useEffect, useState } from "react"
import "./Exercise.css"

const Exercise = () => {
  const [inpValue, setInpValue] = useState("")

  useEffect(() => {
    setTimeout(() => {
      console.log(inpValue)
    }, 2000)
    return () => {}
  }, [inpValue])
  return (
    <div className="main">
      <h4>Console log</h4>
      <h4>Type What to be logged in the console</h4>
      <input
        onChange={(e) => setInpValue(e.target.value)}
        type="text"
        placeholder="Write something what do you want?"
      />

      <h3>
        You see here <span>{inpValue}</span> <br /> what you wrote in input
        field
      </h3>
    </div>
  )
}

export default Exercise
