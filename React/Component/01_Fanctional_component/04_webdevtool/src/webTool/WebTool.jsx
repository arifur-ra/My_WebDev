import ThumbUpIcon from "@material-ui/icons/ThumbUp"
import React, { useState } from "react"
import ChildWebTool from "./ChildWebTool"
import ToolItem from "./ToolItem"
import "./WebTool.css"

const Webpoll = () => {
  const initializePollItem = () => {
    const arr = []
    arr.push(new ToolItem("HTML"))
    arr.push(new ToolItem("JavaScript"))
    arr.push(new ToolItem("React"))
    arr.push(new ToolItem("NodeJS"))

    return arr
  }

  const [toolitem, setToolitem] = useState(initializePollItem())
  const [winner, setWinner] = useState(toolitem[0])

  const updateVote = (idx) => {
    setToolitem((prev) => {
      const copy = [...prev]
      copy[idx].addVote()
      copy.sort((a, b) => b.count - a.count)
      return copy
    })
    setWinner(toolitem[0])
    //research about the useEffect hook and try to use it!
  }

  const divItems = toolitem.map((value, idx) => {
    return (
      <ChildWebTool
        onClickHandler={() => updateVote(idx)}
        count={value.count}
        title={value.title}
        key={idx}
      />
    )
  })

  return (
    <div className="main">
      <h1>
        Vote(
        <ThumbUpIcon />) your favorite WebDev tool
      </h1>
      <div className="poll">{divItems}</div>

      <h3>
        The tool <span>[ {winner.title} ]</span> is winning with
        <span> ( {winner.count} )</span> votes for now.
      </h3>
    </div>
  )
}

export default Webpoll
