import GitHubIcon from "@material-ui/icons/GitHub"
import React, { useEffect, useState } from "react"
import "./App.css"

const App = () => {
  const [userSearch, setUserSearch] = useState([])

  useEffect(() => {
    fetch("https://api.github.com/users")
      // {
      //   method: "GET",
      //   headers: { Authorization: "Basic " + btoa("login:password") },
      // })
      .then((response) => response.json())
      .then((data) => {
        setUserSearch(data)
      })
    // .catch((error) => console.log(error.message))
  }, [])

  const userList = userSearch.map((user) => (
    <div key={user.id} className="info">
      <img src={user.avatar_url} alt="Image" />
      <h3>{user.login}</h3>
      <a href={user.html_url}>More Info</a>
    </div>
  ))
  return (
    <>
      <h1>
        <span> User Search </span>
        <GitHubIcon />
      </h1>
      <div className="card">{userList}</div>
    </>
  )
}

export default App
