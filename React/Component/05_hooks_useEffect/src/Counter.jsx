import React, { useEffect, useState } from "react"
import "./Counter.css"

const Counter = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("Arif")
  const increment = () => setCount((prev) => prev + 1)
  const decrement = () => setCount((prev) => prev - 1)

  //useEffect('callback','dependencies')
  useEffect(() => {
    let card = document.getElementById("card")
    if (count > 0 && count < 18) {
      card.classList.add("red")
      card.classList.remove("green")
    } else if (count >= 18 && count <= 35) {
      card.classList.add("green")
      card.classList.remove("red")
    } else {
      card.classList.remove("green", "red")
    }

    return () => {
      console.log("did Update")
    }
  }, [count, name])

  return (
    <div id="card">
      <p>
        Hello good People, I am <span> {name} </span> and I am
        <span> {count} </span> years old
      </p>
      <div className="btn">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={() => setName(name === "Arif" ? "Ayan" : "Arif")}>
          Change Name
        </button>
      </div>
    </div>
  )
}

export default Counter
