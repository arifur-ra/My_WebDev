import React, { Component } from "react"

class InfoDetails extends Component {
  render() {
    const { firstName, lastName, email, age } = this.props
    return (
      <tr>
        <td>{firstName}</td>
        {/* <td>{lastName}</td>
        <td>{email}</td>
        <td>{age}</td> */}
        {/* <td>{this.props.msg}</td> */}
      </tr>
    )
  }
}

export default InfoDetails
