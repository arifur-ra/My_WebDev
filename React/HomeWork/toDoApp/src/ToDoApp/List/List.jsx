import React from "react"
import "./List.css"
import ListItem from "./ListItem/ListItem"
const List = () => {
  return (
    <div className="container">
      <ul class="list-group">
        <ListItem id="e11" textContent=" I have to add something" />
      </ul>
    </div>
  )
}

List.propTypes = {}

export default List
