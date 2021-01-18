import React, { Component } from "react"
import Display from "./Display/Display"
import PersonalForm from "./PersonalForm/PersonalForm"

class PersonalData extends Component {
  state = {
    infoDetails: [],
  }
  addData = (values) => {
    this.setState((prevState) => {
      let infoDetailsArray = [...prevState.infoDetails, values]
      return {
        infoDetails: infoDetailsArray,
      }
    })
  }

  render() {
    return (
      <div>
        <PersonalForm getValue={(values) => this.addData(values)} />
        <Display infoDetails={this.state.infoDetails} />
      </div>
    )
  }
}

export default PersonalData
