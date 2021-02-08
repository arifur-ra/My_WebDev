import { useEffect, useState } from "react"
import "./App.css"

const App = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("https://api.github.com/users") // without any define like Update,Post,Delete,Get!!  would be by default GET Method
      .then((response) => response.json()) // bring the response and convert to the json()format
      .then((data) => {
        setUsers(data) // set users in state
      })
  }, []) // empty dependency[] means only once the component mounted
  const list = users.map((user) => (
    <div key={user.id} className="info">
      <h5>{user.login}</h5>
    </div>
  ))

  return <div className="user">{list}</div>
}

export default App
