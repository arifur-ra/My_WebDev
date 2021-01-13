import React, { Component } from "react"
import Article from "./Article/Article"
import LeftSide from "./LeftSide/LeftSide"
import "./Main.css"
import RightSide from "./RightSide/RightSide"

export class Main extends Component {
  render() {
    return (
      <main className="Main">
        <LeftSide />
        <Article />
        <RightSide />
      </main>
    )
  }
}

export default Main
