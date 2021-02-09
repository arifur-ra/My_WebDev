import "Pixabay.css"
import React, { useEffect, useState } from "react"

const Pixabay = () => {
  const [img, setImg] = useState([])
  const [input, setInput] = useState(0)

  const InputHandler = (e) => {
    setInput(e.target.value)
  }

  useEffect(() => {
    fetch(
      "https://pixabay.com/api/?key=20214383-9bc90df61de4ad44b136b77bb&q=cats&per_page=20"
    )
      .then((response) => response.json())
      .then((data) => {
        setImg(data.hits)
      })
  }, [])

  const listOfImage = img.map((item) => (
    <div key={item.id} className="in-img">
      <img src={item.userImageURL} alt="Image" />
      <h2>{item.tags}</h2>
    </div>
  ))

  return (
    <div className="main">
      <input type="text" onChange={InputHandler} />
      <div className="img-list">{listOfImage}</div>
    </div>
  )
}

export default Pixabay
