import React, { Component } from "react"
import "./PersonalForm.css"
class PersonalForm extends Component {
  state = {
    firstName: "",
    // lastName: "",
    // email: "",
    // age: "",
  }
  addInformation = (e) => {
    e.preventDefault()
    let values = {
      firstName: e.target.firsName.value,
      // lastName: e.target.lastName.value,
      // email: e.target.email.value,
      // age: e.target.age.value,
      // msg: e.target.msg.value,
    }
    this.props.getValue(values)
  }
  render() {
    return (
      <form action="#" onSubmit={this.addInformation}>
        <h2>Personal Information</h2>
        <input type="text" id="firstName" placeholder="Enter your First Name" />
        <input type="button" value="Submit" />
      </form>
    )
  }
}

export default PersonalForm
