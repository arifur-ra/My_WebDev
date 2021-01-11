import { Component } from "react"
import "./Article.css"

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
    InputValue: " ",
  }

  ChangeTitle(e) {
    console.log(e.target.value)
    // this.state.InputValue = e.target.value  // Wrong way to do !!!
    /**
     * valid way is to do state
     */
    // this.setState({
    //   InputValue: e.target.value,
    // })
    this.setState(() => {
      return { InputValue: e.target.value }
    })
    console.log(this.state.InputValue)
  }
  render() {
    return (
      <div className={"Article"}>
        <input
          type="text"
          placeholder="Enter your Title"
          onChange={(event) => {
            this.ChangeTitle(event)
          }}
        />
        <h2>Here is My Title</h2>
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
      </div>
    )
  }
}

export default Article
