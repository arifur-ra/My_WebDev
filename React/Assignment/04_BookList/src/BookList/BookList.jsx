import React, { Component } from "react"
import "./BookList.css"
import Display from "./Display/Display"
import Form from "./Form/Form"
class BookList extends Component {
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
        <Form getValues={(values) => this.addRow(values)} />
        <Display bookList={this.state.bookList} />
      </div>
    )
  }
}

export default BookList
