import { Component } from "react"
import Article from "./Article/Article"
import LeftSide from "./Leftside/Leftside"
import "./Main.css"
import RightSide from "./Rightside/Rightside"

class Main extends Component {
  render() {
    return (
      <main class="Main">
        <LeftSide />
        <Article />
        <RightSide />
      </main>
    )
  }
}

export default Main
