import React, { useState } from "react"
import "./App.css"
import Button from "./component/Button/Button"
import Image from "./component/Images/Image"
class Light {
  // imageAlt
  // imagePath
  // switchButton
  // lightOn
  static on = () => {
    const light = new Light()
    light.lightOn = true
    light.imagePath = "img/pic_bulbon.gif"
    light.imageAlt = "The Light is On"
    light.switchButton = "OFF"
    return light
  }

  static off = () => {
    const light = new Light()
    light.lightOn = false
    light.imagePath = "img/pic_bulboff.gif"
    light.imageAlt = "The Light is Off"
    light.switchButton = "ON"
    return light
  }
  switch = () => (this.lightOn ? Light.off() : Light.on())
}

const App = () => {
  const [lamp, updateLamp] = useState(Light.off())
  const switchLamp = () => updateLamp(lamp.switch())
  return (
    <div>
      <h3>
        Switching <span>ON</span> / <b>OFF</b>
      </h3>
      <Image path={lamp.imagePath} alt={lamp.imageAlt} />
      <Button value={lamp.switchButton} onclick={switchLamp} />
    </div>
  )
}
export default App
