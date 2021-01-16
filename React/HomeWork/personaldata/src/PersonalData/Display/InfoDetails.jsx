import React, { Component } from "react"

class InfoDetails extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.firstName}</td>
        <td>{this.props.lastName}</td>
        <td>{this.props.email}</td>
        <td>{this.props.age}</td>
        {/* <td>{this.props.msg}</td> */}
      </tr>
    )
  }
}

export default InfoDetails
