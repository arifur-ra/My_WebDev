import PropTypes from "prop-types"
import React, { Component } from "react"
import "./Light.css"
import LightOff from "./pic_bulboff.gif"
import LightOn from "./pic_bulbon.gif"

class Light extends Component {
  render() {
    const { switchLight } = this.props
    return (
      <div>
        <img
          src={switchLight ? LightOff : LightOn}
          alt={switchLight ? "LightOff" : "LightOn"}
          width="100px"
          height="180px"
        />
      </div>
    )
  }
}
Light.propTypes = {
  switchLight: PropTypes.bool.isRequired,
}
export default Light
