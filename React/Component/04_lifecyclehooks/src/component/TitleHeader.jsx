import React, { Component } from "react"
import "./TitleHeader.jsx"

class TitleHeader extends Component {
  state = {
    title: "",
  }
  static getDerivedStateFromProps(props, state) {
    if (state.title !== props.newTitle) {
      return {
        title: props.newTitle,
      }
    } else {
      return null
    }
  }
  componentDidMount() {
    /** its(componentDidMount) use for bring the data from backend */
    console.log(`component did mount....`)
    let header = document.querySelector("h2")
    header.style.color = "green"
  }
  componentDidUpdate() {
    console.log(`component did update....`)
    let header = document.querySelector("h2")
    header.style.background = "silver"
    header.style.color = "red"
    header.style.border = "2px solid blue"
  }
  componentWillUnmount() {
    console.log(`component will Unmount....`)
    alert(" component will Unmount")
    this.setState({
      title: "",
    })
  }
  render() {
    return (
      <div>
        <h2>{this.state.title}</h2>
        {/* <h2>{this.props.newTitle}</h2>   // without lifecycle */}
      </div>
    )
  }
}

export default TitleHeader
