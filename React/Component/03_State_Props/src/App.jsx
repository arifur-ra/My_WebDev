import { Component, Fragment } from "react"
import "./App.css"
import Box from "./component/Box/Box"
import Input from "./component/Input/Input"
class App extends Component {
  // getting Value from Input
  state = {
    valueFromInputComponent: "",
  }
  gettingText = (text) => {
    this.setState({
      valueFromInputComponent: text,
    })
    console.log(text)
  }

  render() {
    return (
      <Fragment>
        {/* <Header /> */}
        <div className="Button-container">
          <Input getValue={this.gettingText} />
          <h3>
            Here you get the Text : <br />
            {this.state.valueFromInputComponent}
          </h3>
        </div>

        <Box
          mode={"Light"}
          title={"Light"}
          what={"I am the Boss in my World !!"}
        />
        <Box mode={"Dark"} title={"Dark"} />

        {/* <Main /> */}
      </Fragment>
    )
  }
}

export default App
