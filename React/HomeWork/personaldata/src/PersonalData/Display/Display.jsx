import React, { Component } from "react"
import "./Display.css"
import InfoDetails from "./InfoDetails"

class Display extends Component {
  render() {
    const { infoDetails } = this.props
    const finalInfoDetails = infoDetails.map((item, index) => {
      return (
        <InfoDetails
          key={index}
          firstName={item.firstName}
          // lastName={item.lastName}
          // email={item.email}
          // age={item.age}
          // // msg={item.msg}
        />
      )
    })
    return (
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            {/* <th>Last Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Message</th> */}
          </tr>
        </thead>
        <tbody>{finalInfoDetails}</tbody>
      </table>
    )
  }
}

export default Display
