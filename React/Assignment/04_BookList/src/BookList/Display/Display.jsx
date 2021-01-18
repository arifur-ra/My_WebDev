import PropTypes from "prop-types"
import React, { Component } from "react"
import "./Display.css"
import TableRow from "./TableRow"

class Display extends Component {
  render() {
    const { bookList } = this.props
    const createBookList = bookList.map((item, index) => {
      return (
        <TableRow
          key={index}
          title={item.title}
          author={item.author}
          isbn={item.isbn}
        />
      )
    })
    return (
      <div>
        <table class="tab">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>ISBN</th>
            </tr>
          </thead>
          <tbody>{createBookList}</tbody>
        </table>
      </div>
    )
  }
}
Display.propTypes = {
  bookList: PropTypes.array.isRequired,
}
export default Display
