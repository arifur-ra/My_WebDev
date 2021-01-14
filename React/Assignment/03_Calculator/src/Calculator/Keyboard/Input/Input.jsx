import React, { Component } from "react"
import "./Input.css"

class Input extends Component {
  // HandleChange = (e) => {
  //   this.props.getValue(e.target.value)
  // }
  render() {
    return (
      <div className="inp">
        <input
          onChange={(e) => this.props.getValue(e.target.value, this.props.seq)}
          type="text"
          className={this.props.seq}
        />
      </div>
    )
  }
}

export default Input
