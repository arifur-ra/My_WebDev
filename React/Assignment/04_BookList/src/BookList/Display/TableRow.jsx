import PropTypes from "prop-types"
import React, { Component } from "react"
import "./Display"

class TableRow extends Component {
  render() {
    // object destructuring
    const { title, author, isbn } = this.props
    return (
      <tr>
        <td>{title}</td>
        <td>{author}</td>
        <td>{isbn}</td>
      </tr>
    )
  }
}
TableRow.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  isbn: PropTypes.string.isRequired,
}
export default TableRow
