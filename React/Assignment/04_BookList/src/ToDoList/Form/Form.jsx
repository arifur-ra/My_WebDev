import React, { Component } from "react"
import "./Form.css"

class Form extends Component {
  addProperties = (e) => {
    e.preventDefault()
    let values = {
      title: e.target.title.value,
      author: e.target.author.value,
      isbn: e.target.isbn.value,
    }

    this.props.getValues(values)
  }
  render() {
    return (
      <form action="#" onSubmit={this.addProperties}>
        <div className="input">
          <label for="title">Title</label>
          <input type="text" id="title"></input>
        </div>
        <div className="input">
          <label for="author">Author</label>
          <input type="text" id="author"></input>
        </div>
        <div className="input">
          <label for="isbn">ISBN#</label>
          <input type="text" id="isbn"></input>
        </div>
        <div>
          <input type="submit" value="Submit"></input>
        </div>
      </form>
    )
  }
}

export default Form
