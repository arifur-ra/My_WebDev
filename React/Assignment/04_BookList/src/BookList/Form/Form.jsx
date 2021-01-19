import PropTypes from "prop-types"
import React, { Component } from "react"
import Alert from "./Alert"
import "./Form.css"

class Form extends Component {
  state = {
    alert: null,
  }

  setAlert = (type, msg, time) => {
    this.setState({
      alert: {
        type,
        msg,
      },
    })
    setTimeout(() => {
      this.setState({
        alert: null,
      })
    }, 3000)
  }
  addProperties = (e) => {
    e.preventDefault()
    let values = {
      title: e.target.title.value,
      author: e.target.author.value,
      isbn: e.target.isbn.value,
    }

    if (!values.title || !values.author || !values.isbn) {
      // if one of the fields is empty
      this.setAlert("warning", "Please fill the all Input fields", 3000)
    } else {
      this.setAlert("success", "The Book is added Successfully", 5000)
      this.props.getValues(values)

      // Clean the input after submitted form
      e.target.title.value = ``
      e.target.author.value = ``
      e.target.isbn.value = ``
    }
  }
  render() {
    return (
      <div>
        <Alert alert={this.state.alert} />
        <h1>BOOK-LIST</h1>

        <form action="#" onSubmit={this.addProperties}>
          <div className="input">
            <label for="title">Title</label>
            <input
              type="text"
              id="title"
              placeholder="Write your Book Title"
            ></input>
          </div>
          <div className="input">
            <label for="author">Author</label>
            <input
              type="text"
              id="author"
              placeholder="Write your Book Author"
            ></input>
          </div>
          <div className="input">
            <label for="isbn">ISBN#</label>
            <input
              type="text"
              id="isbn"
              placeholder="Write your Book isbn#"
            ></input>
          </div>
          <div>
            <input type="submit" value="Submit"></input>
          </div>
        </form>
      </div>
    )
  }
}
Form.propTypes = {
  getValues: PropTypes.func.isRequired,
}

export default Form
