import ThumbUpIcon from "@material-ui/icons/ThumbUp"
import React from "react"
import "./LocalStorage.css"

const LocalStorageRow = ({ count, tool, addVote }) => {
  return (
    <div className="child">
      <span className="span">{count}</span>
      <span className="tool">{tool}</span>
      <button onClick={addVote}>
        Vote <ThumbUpIcon />
      </button>
    </div>
  )
}

export default LocalStorageRow
