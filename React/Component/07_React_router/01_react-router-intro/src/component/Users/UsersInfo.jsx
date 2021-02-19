import PropTypes from "prop-types"
import React from "react"
import "./UsersInfo.css"

const UsersInfo = ({ users }) => {
  const userList = users.map((item) => (
    <div key={item.id} className="card ">
      <img src={item.avatar_url} alt={item.login} />
      <h3>{item.login}</h3>
      <a href={item.html_url}>MoreInfo</a>
    </div>
  ))
  return <div className="list">{userList}</div>
}
UsersInfo.propTypes = {
  users: PropTypes.array.isRequired,
}
export default UsersInfo
