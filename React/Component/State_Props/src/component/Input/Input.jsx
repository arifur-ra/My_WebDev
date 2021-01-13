import React, { Component } from "react"
import "./Input.css"

export class Input extends Component {
  state = {
    inputValue: "",
  }
  onChangeInput = (event) => {
    // console.log("this is", event.target.value)
    this.setState({
      inputValue: event.target.value,
    })
  }

  render() {
    return (
      <div>
        {/* Input */}
        <input
          onChange={this.onChangeInput}
          type="text"
          placeholder="Write something"
          value={this.state.inputValue}
        />
        {/* Button */}
        <button
          onClick={() => {
            this.props.getValue(this.state.inputValue)
          }}
        >
          Show Text
        </button>
      </div>
    )
  }
}

export default Input
