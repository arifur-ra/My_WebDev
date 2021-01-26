import React, { useState } from "react"
import TodoItem from "../domain/TodoItem"
import todoService from "../service/todoservice"
import Form from "./Form/Form"
import List from "./List/List"

const ToDoApp = () => {
  const [todo, updateTodoValue] = useState(new TodoItem())
  //   const updateTodoHandler = (e) => updateTodo(e.target.value)
  const updateTodoHandler = (e) =>
    updateTodoValue((prev) => {
      const copy = Object.assign(new TodoItem(), prev)
      copy.value = e.target.value
      return copy
    })

  const [todoList, updateTodoList] = useState([])

  const submitForm = () => {
    todoService.create(todo)
    updateTodoValue(new TodoItem())
  }

  return (
    <div>
      <Form updateInputHandler={updateTodoHandler} submitForm={submitForm} />
      <List />
    </div>
  )
}

ToDoApp.propTypes = {}

export default ToDoApp
