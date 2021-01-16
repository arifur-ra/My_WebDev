import React, { Component } from "react"
import Display from "./Display/Display"
import Form from "./Form/Form"
import "./ToDoList.css"
class ToDoList extends Component {
  state = {
    bookList: [],
  }

  addRow = (values) => {
    this.setState((prevState) => {
      let bookArray = [...prevState.bookList, values] // because of Array
      return {
        bookList: bookArray,
      }
    })
  }
  render() {
    return (
      <div className="toDo">
        <h1>Book-List</h1>
        <Form getValues={(values) => this.addRow(values)} />
        <Display bookList={this.state.bookList} />
      </div>
    )
  }
}

export default ToDoList
