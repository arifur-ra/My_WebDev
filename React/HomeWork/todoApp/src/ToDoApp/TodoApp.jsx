import DeleteIcon from "@material-ui/icons/Delete"
import React, { useState } from "react"
import Input from "./Input/Input"
import "./TodoApp.css"

const TodoApp = () => {
  const [name, setName] = useState("")
  const [nameList, setNameList] = useState([])

  const changeInput = (e) => {
    setName(e.target.value)
  }

  const addName = (e) => {
    e.preventDefault()

    if (name !== "") {
      const nameDetails = {
        id: Math.floor(Math.random() * 1000),
        value: name,
      }

      setNameList([...nameList, nameDetails])
      e.target.value = ""
    }
  }
  const deleteName = (e, id) => {
    e.preventDefault()
    setNameList(nameList.filter((item) => item.id !== id))
  }
  return (
    <div className="todo">
      <Input changeInput={changeInput} addName={addName} />
      <br />
      {nameList !== [] ? (
        <ul>
          <h3> List Item</h3>
          {nameList.map((item, index) => (
            <li key={index} className="list">
              {item.value}
              {
                // <button
                //   className="delete"
                //   onClick={(e) => deleteName(e, item.id)}
                // >
                //   Delete
                // </button>
              }
              <DeleteIcon
                className="delete"
                onClick={(e) => deleteName(e, item.id)}
              />
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}

export default TodoApp
