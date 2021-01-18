import { Component, Fragment } from "react"
import "./App.css"
import Footer from "./component/Footer/Footer"
import Header from "./component/Header/Header"
import Main from "./component/Main/Main"
class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Main />
        <Footer />
      </Fragment>
    )
  }
}

export default App
