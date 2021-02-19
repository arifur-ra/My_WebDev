import React, { useState } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import "./App.css"
import About from "./component/Layout/About"
import Navbar from "./component/Layout/Navbar"
import Search from "./component/Users/Searchbar"
import UsersInfo from "./component/Users/UsersInfo"

const App = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)

  const searchUsers = (text) => {
    setLoading(true)
    const ApiKey = process.env.REACT_APP_CLIENT_ID
    const ApiSecret = process.env.REACT_APP_CLIENT_SECRET
    console.log(ApiKey)

    fetch(
      `https://api.github.com/search/users?q=${text}&client_id=${ApiKey}&client_Secret=${ApiSecret}`
    )
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.items)
        setLoading(false)
        console.log(data.items)
      })
  }
  const clearUsers = () => {
    setUsers([])
    setLoading(false)
  }
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <>
                <Search
                  searchUsers={searchUsers}
                  clearUsers={clearUsers}
                  showClear={users.length > 0 ? true : false}
                />
                <UsersInfo users={users} />
              </>
            )}
          />
          <Route exact path="/about" component={About} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
