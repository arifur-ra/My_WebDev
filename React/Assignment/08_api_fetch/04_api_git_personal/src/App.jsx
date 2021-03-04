import React, { useState } from "react"
import "./App.css"
import Navbar from "./Component/Layout/Navbar"
import Search from "./Component/Users/Search"
import Users from "./Component/Users/Users"

const App = () => {
  const [users, setUsers] = useState([])

  const searchName = (name) => {
    const apiKey = process.env.REACT_APP_CLIENT_ID
    const apiSecret = process.env.REACT_APP_CLIENT_SECRET
    fetch(`http://api.github.com/search/users?q=${name}&client_ID=
    ${apiKey}&client_Secret=${apiSecret}`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.items)
      })
  }
  const clearUsers = () => {
    setUsers([])
  }
  return (
    <div className="container">
      <Navbar />
      <Search
        searchName={searchName}
        showClear={users.length > 0 ? true : false}
        clearUsers={clearUsers}
      />
      <Users users={users} />
    </div>
  )
}

export default App
