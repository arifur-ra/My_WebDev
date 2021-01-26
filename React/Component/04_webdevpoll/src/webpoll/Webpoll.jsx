import React, { useState } from "react"
import Childpoll from "./Childpoll"
import PollItem from "./pollItem"
import "./webpoll.css"

const Webpoll = () => {
  const initializePollItem = () => {
    const arr = []
    arr.push(new PollItem("HTML"))
    arr.push(new PollItem("JavaScript"))
    arr.push(new PollItem("React"))
    arr.push(new PollItem("NodeJS"))

    return arr
  }

  const [pollitem, setPollitem] = useState(initializePollItem())
  const [winner, setWinner] = useState(pollitem[0])

  const updateVote = (idx) => {
    setPollitem((prev) => {
      const copy = [...prev]
      copy[idx].addVote()
      copy.sort((a, b) => b.count - a.count)
      return copy
    })
    setWinner(pollitem[0])
    //research about the useEffect hook and try to use it!
  }

  const divItems = pollitem.map((value, idx) => {
    return (
      <Childpoll
        onClickHandler={() => updateVote(idx)}
        count={value.count}
        title={value.title}
        key={idx}
      />
    )
  })

  return (
    <div className="main">
      <h1>Vote your favorite WebDev tool </h1>
      <div className="poll">{divItems}</div>

      <h3>
        The tool <span>[ {winner.title} ]</span> is winning with
        <span> ( {winner.count} )</span> votes for now.
      </h3>
    </div>
  )
}

export default Webpoll
