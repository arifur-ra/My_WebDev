import PropTypes from "prop-types"
import React, { Component } from "react"

class Button extends Component {
  render() {
    const { click, toggleButton } = this.props
    return (
      <div>
        <button onClick={click}>{toggleButton ? "ON" : "OFF"}</button>
      </div>
    )
  }
}
Button.propTypes = {
  toggleButton: PropTypes.func.isRequired,
  click: PropTypes.bool.isRequired,
}
export default Button
