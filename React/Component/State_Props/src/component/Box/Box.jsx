import React, { Component } from "react"
import "./Box.css"

export class Box extends Component {
  render() {
    return (
      <div className="Box">
        <div className={this.props.mode}>
          <h1>{this.props.title} </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sit
            magni maiores dolores <span>{this.props.what}</span> enim odit
            quibusdam quas optio, adipisci nulla eius quis quasi inventore
            cumque animi omnis. Ut, reprehenderit omnis!
          </p>
        </div>
      </div>
    )
  }
}

export default Box
