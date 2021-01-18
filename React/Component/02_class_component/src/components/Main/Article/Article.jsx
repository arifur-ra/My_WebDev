import { Component } from "react"
import "./Article.css"
import Input from "./Input/Input"

class Article extends Component {
  // State Component
  //   constructor(props) {
  //     super(props)
  //     this.state ={
  //         InputValue:'';
  //     }
  //   }

  /**
    Another way to write state component
   */
  state = {
    title: " This is My Title",
    dynamicValue: "",
  }
  ClickHandler(e) {
    console.log(this.state.dynamicValue)

    // this.setState((oldState) => {
    //   title: oldState.dynamicValue
    // })
  }
  assignValue = (text) => {
    // text is called in Input Component: this.state.InputValue
    this.setState({
      dynamicValue: text,
    })
  }
  render() {
    return (
      <div className={"Article"}>
        <Input getValue={this.assignValue} />
        <button
          onClick={() => {
            this.ClickHandler()
          }}
        >
          Submit
        </button>
        <h2>{this.state.title}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          nostrum quidem ea veniam, optio exercitationem molestiae nobis magni
          odit. Harum?Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Asperiores sint sequi libero saepe neque esse minima, ducimus veniam
          blanditiis! Repudiandae.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          nostrum quidem ea veniam, optio exercitationem molestiae nobis magni
          odit. Harum?Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Accusantium et a eveniet quia aspernatur, ipsum obcaecati provident ea
          adipisci odit.
        </p>
        <div className={"box"} style={{ background: this.state.title }}>
          Color Me
        </div>
      </div>
    )
  }
}

export default Article
