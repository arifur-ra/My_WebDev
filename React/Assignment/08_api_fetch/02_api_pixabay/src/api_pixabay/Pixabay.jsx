import React, { useEffect, useState } from "react"
import Input from "./Input"
import "./Pixabay.css"
import Select from "./Select"

const Pixabay = () => {
  const [userImage, setImage] = useState([])
  const [word, setWord] = useState("")
  const [num, setNum] = useState("")

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=20214383-9bc90df61de4ad44b136b77bb&q=${word}&per_page=${num}`
    )
      .then((response) => response.json())
      .then((data) => {
        setImage(data.hits)
      })
  }, [word, num])

  const listOfImage = userImage.map((item) => (
    <div key={item.id} className="in-img">
      <h3>{item.tags}</h3>
      <img className="img" src={item.previewURL} alt="Image" />
    </div>
  ))

  return (
    <div className="main">
      <h1> Search Your Favorite Image</h1>
      <Input
        InputHandler={(e) => setWord(e.target.value)}
        InputValue={(e) => setNum(e.target.value)}
      />
      <Select />
      <div className="img-list">{listOfImage}</div>
    </div>
  )
}

export default Pixabay
