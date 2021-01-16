import React, { Component } from "react"
import "./Display"
class TableRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.title}</td>
        <td>{this.props.author}</td>
        <td>{this.props.isbn}</td>
      </tr>
    )
  }
}

export default TableRow
