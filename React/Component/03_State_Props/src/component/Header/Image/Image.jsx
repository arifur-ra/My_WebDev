import React, { Component } from "react"
import "./Image.css"

class Image extends Component {
  render() {
    return <img src={this.props.source} className="App-logo" alt="logo" />
  }
}

export default Image
