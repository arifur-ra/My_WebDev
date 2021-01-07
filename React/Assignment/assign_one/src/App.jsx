import { Fragment } from "react"
import "./App.css"
import Footer from "./component/Footer/Footer"
import Header from "./component/Header/Header"
import Main from "./component/Main/Main"
import Sidebar from "./component/Sidebar/Sidebar"

const App = () => (
  <Fragment>
    <Header />
    <Sidebar />
    <Main />
    <Footer />
  </Fragment>
)

export default App
