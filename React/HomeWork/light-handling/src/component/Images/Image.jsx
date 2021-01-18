import React from "react"

const Image = ({ path, alt }) => {
  return (
    <div>
      <img src={path} alt={alt} />
    </div>
  )
}
export default Image
