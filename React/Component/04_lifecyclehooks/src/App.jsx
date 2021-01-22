import React, { Component } from "react"
import "./App.css"
import TitleHeader from "./component/TitleHeader"

class App extends Component {
  state = {
    value: "Default Item",
    show: true,
    data: [
      {
        id: 1,
        title: "First Item",
      },
      {
        id: 2,
        title: "Second Item",
      },
      {
        id: 3,
        title: "Third Item",
      },
      {
        id: 4,
        title: "Fourth Item",
      },
    ],
  }
  changeTitle = (title) => {
    this.setState({
      value: title,
    })
  }

  toggleBtn = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }))
  }
  render() {
    const List = this.state.data.map((item) => {
      return (
        <li key={item.id} onClick={() => this.changeTitle(item.title)}>
          {item.title}
        </li>
      )
    })
    return (
      <div className="container">
        <h1>LifeCycle Hooks</h1>
        {this.state.show ? <TitleHeader newTitle={this.state.value} /> : null}
        <ul className="list">{List}</ul>
        <button className="btn" onClick={() => this.toggleBtn()}>
          Toggle
        </button>
      </div>
    )
  }
}

export default App
