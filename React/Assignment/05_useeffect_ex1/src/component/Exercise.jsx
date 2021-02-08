import React, { useEffect, useState } from "react"
import "./Exercise.css"

const Exercise = () => {
  const [inpValue, setInpValue] = useState("")
  const handleInput = (e) => {
    setTimeout(() => {
      setInpValue(e.target.value)
    }, 1000)
  }

  useEffect(() => {
    setTimeout(() => {
      console.log(inpValue)
    }, 2000)
  }, [inpValue])
  return (
    <div className="main">
      <h4>Console log &#128513;</h4>
      <h4>Type What to be logged in the console &#129488;</h4>
      <input
        onChange={handleInput}
        type="text"
        placeholder="Write something what do you want?"
      />

      <h3>
        Check the Console You will see <span>{inpValue}</span> <br /> what you
        wrote in input field &#128521;
      </h3>
    </div>
  )
}

export default Exercise
