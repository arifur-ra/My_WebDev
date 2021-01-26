import React, { useState } from "react"
import "../App.css"
import Display from "./Display/Display"
import Keyboard from "./keyboard/Keyboard"

const Classroom = () => {
  const [participant, setParticipant] = useState(15)
  const [name, setName] = useState("Fbw39")
  const [value, setValue] = useState("")
  const [error, setError] = useState("")
  const [warning, setWarning] = useState("")

  const handleInput = (e) => {
    setValue(e.target.value)
  }
  const addClassName = (e) => {
    e.preventDefault()
    if (value == "") {
      return setError("Input can not be Empty")
    } else {
      setName(value)
      setError("successfully Changed")
    }
    e.target.value = ""
  }

  const increaseParticipant = () => {
    if (participant >= 0 && participant < 15) {
      setParticipant(participant + 1)
    } else {
      return setWarning("Participant can not be more than 15 ")
    }
  }
  const decreaseParticipant = () => {
    if (participant <= 0) {
      return setWarning("Participant can not be less than 0")
    } else {
      setParticipant(participant - 1)
    }
  }
  return (
    <div className="App">
      <Display participant={participant} name={name} warning={warning} />
      <Keyboard
        addClassName={addClassName}
        decreaseParticipant={decreaseParticipant}
        increaseParticipant={increaseParticipant}
        handleInput={handleInput}
        error={error}
      />
    </div>
  )
}

export default Classroom
