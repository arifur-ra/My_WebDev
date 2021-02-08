import React, { useEffect, useState } from "react"
import "./LocalStorage.css"
import LocalStorageRow from "./LocalStorageRow"

const LocalStorage = () => {
  const [htmlCount, setHtmLCount] = useState(0)
  const [javaScriptCount, setJavaScriptCount] = useState(0)
  const [pythonCount, setPythonCount] = useState(0)
  const [cssCount, setCssCount] = useState(0)

  const allCounts = [
    { name: "HTML", count: htmlCount },
    { name: "JavaScript", count: javaScriptCount },
    { name: "Python", count: pythonCount },
    { name: "CSS", count: cssCount },
  ]

  let winning = allCounts.reduce((prevItem, newItem) => {
    if (prevItem.count > newItem.count) return prevItem
    if (prevItem.count < newItem.count) return newItem

    // if (newItem.count > prevItem.count) return newItem
    return { name: "None" }
  })

  // let winning = allCounts.sort((a, b) => {
  //   if (a.count > b.count) {
  //     return 1
  //   } else if (a.count < b.count) {
  //     return -1
  //   } else return 0
  // })

  // Obtaining/ getting  the counter/vote from LocalStorage
  // useEffect(() => {
  //   const countersFromLocal = JSON.parse(localStorage.getItem("allCounters"))
  //   if (countersFromLocal) {
  //     setCssCount(countersFromLocal.htmlCount)
  //     setHtmLCount(countersFromLocal.cssCount)
  //     setPythonCount(countersFromLocal.pythonCount)
  //     setJavaScriptCount(countersFromLocal.javaScriptCount)
  //   }
  // }, [])

  // Saving the counter/Vote in the LocalStorage
  //{htmlCount:htmlCount,javaScriptCount:javaScriptCount} is the same as i defined line 26

  useEffect(() => {
    const allCounters = { htmlCount, javaScriptCount, pythonCount, cssCount }
    localStorage.setItem("allCounters", JSON.stringify(allCounters))
  }, [htmlCount, javaScriptCount, pythonCount, cssCount])

  return (
    <div className="main">
      <h1>WebDev Tool</h1>
      <h2>Vote your favorite WebDev Tools</h2>
      <h3>
        <span className="win">{winning.name}</span> is win 🏆 !! having
        <span className="win"> {winning.count}</span> Vote
      </h3>
      <LocalStorageRow
        count={htmlCount}
        tool="HTML"
        addVote={() => setHtmLCount(htmlCount + 1)}
      />
      <LocalStorageRow
        count={javaScriptCount}
        tool="JavaScript"
        addVote={() => setJavaScriptCount(javaScriptCount + 1)}
      />
      <LocalStorageRow
        count={pythonCount}
        tool="Python"
        addVote={() => setPythonCount(pythonCount + 1)}
      />
      <LocalStorageRow
        count={cssCount}
        tool="CSS"
        addVote={() => setCssCount(cssCount + 1)}
      />
    </div>
  )
}

export default LocalStorage
