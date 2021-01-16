import React, { Component } from "react"
import "./PersonalForm.css"
class PersonalForm extends Component {
  addInformation = (e) => {
    e.preventDefault()
    let values = {
      firstName: e.target.firsName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      age: e.target.age.value,
      // msg: e.target.msg.value,
    }
    this.props.getValues(values)
  }
  render() {
    return (
      <form action="#" onSubmit={this.addInformation}>
        <h2>Personal Information</h2>
        <input type="text" id="firstName" placeholder="Enter your First Name" />
        <input type="text" id="lastName" placeholder="Enter YOur Last Name" />
        <input type="text" id="email" placeholder="Enter your Email" />
        <input type="number" id="age" placeholder="Enter your Age" />
        {/* <textarea id="msg" cols="20" rows="5">
          Write Something About yourself
        </textarea> */}
        <input type="button" value="Submit" />
      </form>
    )
  }
}

export default PersonalForm
