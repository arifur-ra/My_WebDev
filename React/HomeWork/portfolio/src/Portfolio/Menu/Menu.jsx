import MenuIcon from "@material-ui/icons/Menu"
import React from "react"
import "./Menu.css"

const Menu = () => {
  const clickMenu = () => {
    var x = document.getElementById("myTopnav")
    if (x.className === "topnav") {
      x.className += " responsive"
    } else {
      x.className = "topnav"
    }
  }
  return (
    <div>
      <div class="topnav" id="myTopnav">
        <a href="#home" class="active">
          Home
        </a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        <a href="#" class="icon" onclick={clickMenu}>
          <MenuIcon />
        </a>
      </div>
    </div>
  )
}

export default Menu
